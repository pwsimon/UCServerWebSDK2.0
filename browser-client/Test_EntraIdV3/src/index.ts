/*
* damit wir das als componente verpacken (global) und beliebig import(iren) koennen
* muessen wir uns nochmal mit *permisions* auseinandersetzen
* discoverHost() braucht Scope: "/asnWebRequest"
*/
import {
	config,
	getUCSIDFromUserId,
	getUserIdFromUserId,
	discoverHost,
	discoverUCSID,
	discoverEntraId } from "estos-entraid";
// config.sUCSID = "riroyabihi";
config.sControllerUrl = "https://devuccontroller.ucconnect.de";

function createUrlAuthorize() {
	const sUserId = localStorage.getItem("userid") ?? "";
	console.assert(0 < sUserId.length, "UserId is Mandatory!");
	const sUCSID = getUCSIDFromUserId(sUserId);
	if(0 == sUserId.length) return;

	/*
	* wird ZWEIMAL refenziert!
	* 1.) try automatic login ... und 2.) explixit/manual login
	* wir muessen immer die gleiche config (TenantId/ClientId) verwenden.
	*/
	let sNonceParam = "";
	discoverUCSID(sUCSID)
		.then(sOrigin => discoverEntraId(sOrigin, sUCSID))
		.then(sUrlAuthorizeOrg => {
			console.log("sUrlAuthorizeOrg:", sUrlAuthorizeOrg);
			const urlAuthorize = new URL(sUrlAuthorizeOrg);
			sNonceParam = urlAuthorize.searchParams.get("nonce") ?? ""; // parse: nonce from: sUrlAuthorizeOrg
			return Promise.resolve(urlAuthorize); // App-Registration from UCServer
			return getUrlAuthorizeFromAppRegistration(); // App-Registration from config
		})
		.then(urlAuthorizeOrg => {
			urlAuthorizeOrg.searchParams.append("redirect_uri", "http://localhost:5173/redirect.html"); //document.location
			if (getUserIdFromUserId(sUserId).length)
				urlAuthorizeOrg.searchParams.append("login_hint", getUserIdFromUserId(sUserId));
			if (!urlAuthorizeOrg.searchParams.has("nonce") && sNonceParam.length)
				urlAuthorizeOrg.searchParams.append("nonce", sNonceParam);
			console.assert(urlAuthorizeOrg.searchParams.has("nonce"), "nonce is required!");
			console.log("urlAuthorize:", urlAuthorizeOrg.href);
			window.location.replace(urlAuthorizeOrg);
		})
		.catch(_e => {
			// console.log("exception caught:", e);
			console.log("discover:", sUCSID, "FAILED");
			localStorage.removeItem("userid");
		});
}
function getUrlAuthorizeFromUCServer(sUCSID: string): Promise<URL> {
/*
* fuehrt via. GET /ws/client/createsession
* zu EAuthManagerIssuerEntraId::GenerateNonce()
	console.log("createUrlAuthorize()");
*
* mit dem erfolgreichen: discoverEntraId() endet die lebensdauer dieser seite -> OnUnLoad
* es wird mit: redirect.html fortgesetzt ...
* An dieser stelle: redirect.html/js beginnt dann das drama bzw. die herausforderung
* die UCSID wieder-her-zu-stellen/neu-zu-ermitteln denn die ist ja, durch das unload, verloren
*/
	return new Promise((resolve, _reject) => {
		discoverUCSID(sUCSID)
			.then(sOrigin => discoverEntraId(sOrigin, sUCSID))
			.then(sUrlAuthorizeOrg => resolve(new URL(sUrlAuthorizeOrg)));
		});
}
function getUrlAuthorizeFromAppRegistration(): Promise<URL> {
	return new Promise((resolve, _reject) => {
		fetch("./appRegistration.json")
			.then(response => response.json())
			.then(oAppRegistration => {
				console.log("AppRegistration:", oAppRegistration);
				const urlAuthorize = new URL(`https://login.microsoftonline.com/${oAppRegistration.tenantId}/oauth2/v2.0/authorize`);
				urlAuthorize.searchParams.append("response_type","id_token");
				urlAuthorize.searchParams.append("response_mode", "fragment");
				urlAuthorize.searchParams.append("scope", "openid profile");
				// der: "nonce" MUSS vom UCServer kommen. Der wird mit dem asnLogon() geprueft ...
				// urlAuthorize.searchParams.append("nonce", "randomstring");
				// die: "client_id" MUSS vom UCServer kommen. Die wird mit dem asnLogon() geprueft ...
				urlAuthorize.searchParams.append("client_id", oAppRegistration.clientId);
				resolve(urlAuthorize);
		})
	});
}

window.addEventListener("load", () => {
	const btnCreateUrlAuthorize = document.getElementById("btnCreateUrlAuthorize") as HTMLButtonElement;
	btnCreateUrlAuthorize.addEventListener("click", () => createUrlAuthorize());

	const btnAuthorityURL = document.getElementById("btnAuthorityURL") as HTMLButtonElement;
	const lblTenantId = document.getElementById("lblTenantId") as HTMLInputElement;
	btnAuthorityURL.addEventListener("click", () => {
		const tenant = lblTenantId.value;
		// [Find your app's OpenID configuration document URI](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols-oidc#find-your-apps-openid-configuration-document-uri)
		window.location.replace(`https://login.microsoftonline.com/${tenant}/v2.0/.well-known/openid-configuration`);
	});

	const edtUserId = document.getElementById("edtUserId") as HTMLInputElement;
	edtUserId.addEventListener("input", (event: Event) => {
		const sUserId =  (event.target as HTMLInputElement).value;
		const sUCSID = getUCSIDFromUserId(sUserId);
		if(0 == sUserId.length) return;
		discoverUCSID(sUCSID)
			.then(sOrigin => discoverEntraId(sOrigin, sUCSID))
			.then(sUrlAuthorize => {
				btnCreateUrlAuthorize.disabled = false;

				/*
				* der vom UCServer bereitgestellte: sUrlAuthorize ist in mehrfacher hinsicht (sch...)
				* Es wird davon ausgegangen das die App-Registration (general.xml, EntraId-Section im UCServer) sowohl fuer das
				* a.) replizieren der benutzer (Anwendung, UCServer UserManager) als auch 
				* b.) die Login-App (Delegated) ist.
				*
				* Wir trennen das sauber:
				* die: general.xml, EntraId-Section im UCServer dient ausschliesslich dem: replizieren der benutzer (Anwendung, UCServer UserManager)
				* dieses Sample hat, wie auch jede kundenanwendung, seine App-Registration. e.g. (./appRegistration.json)
				*
				* Begruendung:
				* jede App-Registration hat nur die Berechtigungen die fuer seinen UseCase noetig sind
				* siehe: createUrlAuthorizeFromAppRegistration()
				*/
				console.log("try:", sUCSID, "SUCCEEDED");

				/*
				* zu diesem Zeitpunkt, nach dem erfolgreichen discoverUCSID(), ist nur der DomainAnteil die UCSID/Alias garantiert.
				* Die vollstaendige <UserId> speichern wir erst mit einem erfolgreichen Login. siehe: redirect.html
				*/
				localStorage.setItem("userid", sUCSID);

				let urlAuthorize = new URL(sUrlAuthorize);
				lblTenantId.value = urlAuthorize.pathname.substring(1, 37); // parse: tenant from: sUrlAuthorize

				console.log("nonce", urlAuthorize.searchParams.get("nonce"));
			})
			.catch(_e => {
				// console.log("exception caught:", e);
				console.log("discover:", sUCSID, "FAILED");
				btnCreateUrlAuthorize.disabled = true;
			});
	});

	/*
	* [Property does not exist on type Window in TypeScript](https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-window#using-an-inline-type-assertion)
	* chrome is not part of global window
	* error TS2339: Property 'chrome' does not exist on type 'Window & typeof globalThis'.
	*/
	if((window as any).chrome.webview) {
		/*
		* Hinweis:
		* aktuell werden die WebTabs erst mit dem Login erzeugt...
		* damit wir im offline fall ueberhaupt einen WebTab haben ueber den wir uns anmelden
		* koennen muessen wir uns erst einen erzeugen ...
		* - button im main-menue, ...
		*/
		console.log("run as WebView2 App");
		/*
		* ToDo: (psi)
		* discoverHost(), see: estos\etapisrvsdk\WebView2\Test_Reactions\setReactions.js
		* was kann ich hier, vom Host, erwarten?
		* - eine connection
		*   http://ecticlient.local/asnWebRequest/asnNegotiateServerConnection
		* - evtl. eine UCSID zu der er verbunden werden moechte (recently used)
		*   http://ecticlient.local/hostWebRequest/settings.json
		*/
		discoverHost()
			.then(oAsnNegotiateServerConnectionResult => {
				console.log("oAsnNegotiateServerConnectionResult:", oAsnNegotiateServerConnectionResult);
				localStorage.setItem("userid", oAsnNegotiateServerConnectionResult.optionalParams.ucsid);
			})
			.catch(e => {
				console.log("exception caught:", e);
			});
	} else {
		const sUserId = localStorage.getItem("userid") ?? "";
		const sUCSID = getUCSIDFromUserId(sUserId);
		if(0 == sUserId.length) return;

		console.log("run as Standalone App:", sUCSID);
		createUrlAuthorize(); // try automatic login ...
	}
});