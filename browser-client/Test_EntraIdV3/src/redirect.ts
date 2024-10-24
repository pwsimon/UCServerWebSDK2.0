import {
	config,
	getUCSIDFromUserId } from "estos-entraid";
import {
	jwtDecode,
	JwtPayload
} from "jwt-decode"; // https://www.npmjs.com/package/jwt-decode

config.sControllerUrl = "https://devuccontroller.ucconnect.de";

const sRedirect = "?post_logout_redirect_uri=" + encodeURIComponent("http://localhost:5173/index.html"); //document.location

// die folgenden werte werden initialisiert durch: iNetLoginIdToken
var sOrigin = "";

// die folgenden werte werden initialisiert durch: iNetTokenVerify
var oSocket: WebSocket | undefined;

// https://stackoverflow.com/questions/56833469/typescript-error-ts7053-element-implicitly-has-an-any-type
interface IStringIndex {
	[key: string]: any
}
const mapRR: IStringIndex = {};

function iNetLoginIdToken(sToken: string, sUCSID: string) {
	fetch(`${config.sControllerUrl}/controller/client/ucws?ucsid=${sUCSID}`)
		.then(response => response.json())
		.then(oDiscover => {
			sOrigin = oDiscover.redirect; 
			const oNegotiate = {
					iClientProtocolVersion: 70
				},
				oInit = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + sToken, // Achtung: mit UCConnect muss das: "JWT" heissen
						"x-epid": sUCSID,
						"x-ucsid": sUCSID
					},
					body: JSON.stringify(oNegotiate)
				};
			return fetch(`${oDiscover.redirect}/ws/client/createsession?clientappid=9`, oInit)
		})
		.then(response => response.json())
		.then(oSession => {
			const lblUser = document.getElementById("lblUser") as HTMLInputElement;
			lblUser.textContent = oSession.ownContact.asnRemoteContact.u8sCtiServerUserName;
			if (oSession.ownContact.asnRemoteContact.optionalParams.jpegPhoto)
				(document.getElementById("imgUser") as HTMLImageElement).src = `data:image/jpeg;base64,${oSession.ownContact.asnRemoteContact.optionalParams.jpegPhoto.binarydata}`;
		});
}
function iNetTokenVerify(sToken: string, sUCSID: string) {
	fetch(`${config.sControllerUrl}/controller/client/ucws?ucsid=${sUCSID}`)
		.then(response => response.json())
		.then(oDiscover => {
			sOrigin = oDiscover.redirect; 
			const oNegotiate = {
					iClientProtocolVersion: 70
				},
				oInit = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + sToken, // Achtung: mit UCConnect muss das: "JWT" heissen
						"x-epid": sUCSID,
						"x-ucsid": sUCSID
					},
					body: JSON.stringify(oNegotiate)
				};
			return fetch(`${oDiscover.redirect}/ws/client/createsession?clientappid=9`, oInit)
		})
		.then(response => response.json())
		.then(oSession => {
			const lblUser = document.getElementById("lblUser") as HTMLInputElement;
			lblUser.textContent = oSession.ownContact.asnRemoteContact.u8sCtiServerUserName;
			if (oSession.ownContact.asnRemoteContact.optionalParams.jpegPhoto)
				(document.getElementById("imgUser") as HTMLImageElement).src = `data:image/jpeg;base64,${oSession.ownContact.asnRemoteContact.optionalParams.jpegPhoto.binarydata}`;

/*
* ab HIER beginnt der Testfall => Get/Verify-Token
*
* wie geht es weiter?
* wir wollen untersuchen was ein asnGetUserToken() liefert wenn es sich um eine mit EntraId Authentifizierte Session handeld ...
* bzw. ganz konkret kann ich mit dem: asnGetUserTokenResult eine weitere Session erzeugen?
* Der ganz wahnsinn mit dem WebSocket ist der tatsache geschuldet das OHNE WebSocket hier nichts mehr geht!
*/
			const sWSOrigin1 = `${sOrigin}/ws/client/websocket?x-ucsessionid=${oSession.sessionid}`,
				sWSOrigin2 = sWSOrigin1.replace("https://", "wss://"),
				sWSOrigin3 = sWSOrigin2.replace("http://", "ws://");
			oSocket = new WebSocket(sWSOrigin3);
			return new Promise((resolve, _reject) => {
					oSocket?.addEventListener("open", (_event) => resolve("WebSocket established"));
					oSocket?.addEventListener("message", (event) => onMessageNative(event));
				});
		})
		.then(_result => asnGetUserToken())
		.then(oAsnGetUserTokenResult => {
			console.log("Token (iss:ucserver)", oAsnGetUserTokenResult.sToken);
/*
* wir fangen hier gar nicht erst an mit dem: asnTokenVerify(Ex)...
* das liefert eh nicht das was uns interessiert z.b. den Issuer ("iss")
* ergo das: oAsnGetUserTokenResult.sToken mit: [JWT Decoder](https://jwt.io/) analysieren
* unabhaengig von der urspruenglichen "Authorization" bekomme ich hier:
* UNBEDINGT ein Token mit Issuer("iss"): "ucserver", EAuthManagerIssuerType::Local
*/
		})
		.catch(e => {
			console.log("exception caught:", e);
		});
}

// helpers/infrastructure
// alles nur wg. dem WebSocket (das ist jetzt mein persoehnlicher feind)
function asnGetUserToken(oAsnGetUserTokenArgument?: any): Promise<any> {
	const oArgument = {
		_type: "AsnGetUserTokenArgument",
		iType: 1 // eUserTokenLogin(1)
	};

	return new Promise((resolve, reject) => {
			wssSend("GetUserToken", oAsnGetUserTokenArgument ?? oArgument, resolve, reject);
		});
}
function createInvokeID() {
	var sId = Math.random().toString().substr(2, 9);
	return parseInt(sId);
}
function wssSend(sOperation: string, oArg: any, fnFulfilled: Function, fnRejected: Function) {
	const oFrame = {
				invoke: {
					invokeID: createInvokeID(), // das ist die "InvokeID" um die antwort/response einem request zuzuordnen
					operationName: "asn" + sOperation,
					argument: oArg
				}
			},
		oCBs = {
				fnFulfilled: "function" === typeof fnFulfilled ? fnFulfilled : null,
				fnRejected: "function" === typeof fnRejected ? fnRejected : null
			};

	oFrame.invoke.argument._type = 'Asn' + sOperation + 'Argument';

	mapRR[oFrame.invoke.invokeID] = oCBs;
	oSocket?.send(window.JSON.stringify(oFrame));
}
function onMessageNative(event: any) {
	/*
	* diesen handler direct anhaengen dann braucht es dass:
	* `const oData = JSON.parse(event.data);` nicht, explizit, in jedem custom module.
	* console.log("enter UCConnect::onMessageNative()");
	*/
	const oData = JSON.parse(event.data);
	return onMessage(oData);
}
function onMessage(oData: any) {
	// console.log("enter UCConnect::onMessage()");
	console.assert("object" === typeof oData);
	if (oData[0].invoke) { // events
		const oFrame = oData[0].invoke;
		return handleInvoke(oFrame);
	} else if (oData[0].reject) {
		const oFrame = oData[0].reject;
		return handleReject(oFrame);
	} else if (oData[0].error) {
		const oFrame = oData[0].error;
		return handleError(oFrame);
	} else if (oData[0].result) {
		const oFrame = oData[0].result;
		return handleResult(oFrame);
	}
	// console.log("leave UCConnect::onMessage() NOT handled");
	return false;
}
function handleInvoke(oFrame: any) {
	console.assert(99999 === oFrame.invokeID, "must be an event!");
	if("AsnChatEventArgument" === oFrame.argument._type) {
		return false;
	}
	else if ("asnChatDatabaseIDChanged" === oFrame.operationName) {
		return true;
	}
	else if ("asnChatDatabaseMaintenance" === oFrame.operationName) {
		return true;
	}
	else if ("asnChatReactionsMulticastEvent" === oFrame.operationName) {
		console.assert("AsnChatReactionsEventArgument" === oFrame.argument._type);
		// originator is Me (other client)
		return true;
	}
	else if ("asnChatReactionsBroadcastEvent" === oFrame.operationName) {
		console.log("AsnChatReactionsEventArgument" === oFrame.argument._type);
		// originator is any paritipant
		return true;
	}

	console.log("handleInvoke() unhandled Type:", oFrame.argument._type);
	return false;
}
function handleReject(oFrame: any) {
	if ("undefined" !== typeof mapRR[oFrame.invokedID.invokedID]) {
		console.warn("handleReject() remove id: ", oFrame.invokedID.invokedID, "from mapRR");
		mapRR[oFrame.invokedID.invokedID].fnRejected(oFrame.details);
		delete mapRR[oFrame.invokedID.invokedID];
		return true;
	}

	console.log("handleReject()", oFrame.details);
	return false;
}
function handleError(oFrame: any) {
	if ("undefined" !== typeof mapRR[oFrame.invokedID]) {
		const oError = oFrame.error;
		console.warn("remove id: ", oFrame.invokedID, "from mapRR. reason:", oError.u8sErrorString);
		mapRR[oFrame.invokedID].fnRejected(oError);
		delete mapRR[oFrame.invokedID];
		return true;
	}

	console.log("UCConnect::handleError()", oFrame);
	return false;
}
function handleResult(oFrame: any) {
	if ("undefined" !== typeof mapRR[oFrame.invokeID]) {
		const oResult = oFrame.result,
			oArg = oResult.result;
		// console.log("handle Type:", oArg._type, "for request:", oFrame.invokeID, oResult.resultValue);
		mapRR[oFrame.invokeID].fnFulfilled(oArg);
		delete mapRR[oFrame.invokeID];
		return true;
	}

	console.log("UCConnect::handleResult() unhandled invokeID:", oFrame.invokeID);
	return false;
}

window.addEventListener("load", (_event) => {
/*
* the parameter: sToken
* is always from EntraId (iss: https://login.microsoftonline.com/)
* check-it: [JWT Decoder](https://jwt.io/)
	console.log("hash:", document.location.hash);
*/
	const nSessionState = document.location.hash.indexOf("&session_state"),
		sToken = document.location.hash.substring(10, nSessionState),
		decoded = jwtDecode<JwtPayload>(sToken) as any;

	console.assert(decoded.login_hint, "configure App-Registartion for: logout_hint");

	const sUserId = decoded.preferred_username as string,
		sUCSID = getUCSIDFromUserId(sUserId);

	/*
	* wir fuehren ein UNBEDINGTES Upgrade, auf den erfolgreichen, Account aus damit der UseCase:
	* "simply close the Tab/Browser", mit dem last recently used account, funktioniert!
	*/
	console.assert(sUserId.length > 0, "login FAILED!");
	localStorage.setItem("userid", sUserId); // Upgrade
	console.log("upgrade <userid> to:", sUserId);

	const btnSignOutRestart = document.getElementById("btnSignOutRestart") as HTMLButtonElement;
	btnSignOutRestart.addEventListener("click", () => {
		const sUrlSignOut = `https://login.microsoftonline.com/${decoded.tid}/oauth2/v2.0/logout`;
		const sLogoutHint: string = decoded.login_hint ? "&logout_hint=" + decoded.login_hint: "";
		const urlSignOut = sUrlSignOut.concat(sRedirect, sLogoutHint);
		window.location.replace(urlSignOut);
		// window.open("http://localhost:5173/index.html");
	});
	const btnSwitchAccount = document.getElementById("btnSwitchAccount") as HTMLButtonElement;
	btnSwitchAccount.addEventListener("click", () => {
		localStorage.setItem("userid", sUCSID); // Downgrade, damit kommt die "recentlyUsed-Accounts-List" hoch
		console.log("downgrade <userid> to:", sUCSID);
		window.location.replace("http://localhost:5173/index.html"); // estos\etapisrvsdk\WebView2\Test_EntraIdV3\src\index.ts(16), createUrlAuthorize()
	});

	const btnSelectUCSID = document.getElementById("btnSelectUCSID") as HTMLButtonElement;
	btnSelectUCSID.addEventListener("click", () => {
		localStorage.removeItem("userid");
		const sUrlSignOut = `https://login.microsoftonline.com/${decoded.tid}/oauth2/v2.0/logout`;
		// to add the: logout_hint enable the: login_hint and use the value from the Token/Claim as parameter
		// logout_hint (pws@psi...): "O.CiQ3NDg3NjQxMC02YjRmLTQzYmEtYTYwNS1lZGQyMzMxZGM0ZjISJDE5NGFhNDhmLTQwNmMtNGRmYy1iN2QzLTc4MTliN2YzZmY1MxoecHdzQHBzaWVzdG9zZGUub25taWNyb3NvZnQuY29tIFg="
		// [logout_hint](https://learn.microsoft.com/en-us/entra/identity-platform/optional-claims?tabs=appui)
		const sLogoutHint: string = decoded.login_hint ? "&logout_hint=" + decoded.login_hint: "";
		const urlSignOut = sUrlSignOut.concat(sRedirect, sLogoutHint);
		// console.log("urlSignOut:", urlSignOut);
		window.location.replace(urlSignOut);
	});
	const btnSignOut = document.getElementById("btnSignOut") as HTMLButtonElement;
	btnSignOut.addEventListener("click", () => {
		/*
		* keep: localStorage.getItem("userid")
		* so with open: index.html again an login procces started automaticaly
		* the user will be propmted for its password (user-interaction)
		*/
		const sUrlSignOut = `https://login.microsoftonline.com/${decoded.tid}/oauth2/v2.0/logout`;
		// const urlSignOut = sUrlSignOut.concat(sRedirect);
		// console.log("sUrlSignOut:", sUrlSignOut);
		window.location.replace(sUrlSignOut);
	});

	console.log("Token (iss:login.microsoftonline.com)", sToken);
	console.log("Token (iss:login.microsoftonline.com)", decoded);
	if((window as any).chrome.webview) {
		/*
		* das funktioniert (window.chrome.webview) natuerlich NUR in einem ProCall WebViewHost
		* ToDo: (psi)
		* einen handler fuer PostMessage im CWebViewHost der
		* - den connect (sOrigin) macht
		* - das asnLogon (sToken) mit: AsnAuthenticationChoice::openidcCid macht
		* Hinweis:
		* mit dem Login werden aktuell/letztlich ALLE WebTabs destroy'ed und neu erzeugt ...
		* ob wir einen WebTab (App) brauchen die das Login "ueberlebt" muessen wir herausfinden
		*/
		console.log("run as WebView2 App:", sUCSID);
		iNetLoginIdToken(sToken, sUCSID);
		/*
		* muss auch nach: estos-slave-tab bzw. in das npm Module
		const oHostLogin = {
				sUCController: EXPO_PUBLIC_CONTROLLER_URL,
				sUCSID: EXPO_PUBLIC_UCSID,
				sToken
			},
			oFrame = {
					sRequestID: "1.0.0.R43", // legacy "invokeID"
					operationName: "/loginApp/login", // estos\etapimonitor\LoginAPIHandler.cpp(4)
					argument: oHostLogin
				};
		(window as any).chrome.webview.postMessage(oFrame);
		*/
	} else {
		console.log("run as Standalone App:", sUCSID);
		iNetTokenVerify(sToken, sUCSID);
		// iNetLoginIdToken(sToken, sUCSID);
	}
});
