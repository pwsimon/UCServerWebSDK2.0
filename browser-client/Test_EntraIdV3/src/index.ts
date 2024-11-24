/*
* damit wir das als componente verpacken (global) und beliebig import(ieren) koennen
* muessen wir uns nochmal mit *permisions* auseinandersetzen
* discoverHost() braucht Scope: "/asnWebRequest"
*/
import {
	config,
	getUCSIDFromUserId,
	getUserIdFromUserId,
	discoverHost, // always against: http://ecticlient.local/
	discoverUCSID, // requires: config.sControllerUrl
	discoverEntraId
} from "estos-entraid";
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
	*
	* discoverEntraId() fuehrt via. GET /ws/client/createsession
	* zu EAuthManagerIssuerEntraId::GenerateNonce()
		console.log("createUrlAuthorize()");
	*/
	let sNonceParam = "";
	discoverUCSID(sUCSID)
		.then(sOrigin => discoverEntraId(sOrigin, sUCSID))
		.then(urlAuthorizeOrg => {
			console.log("urlAuthorizeOrg:", urlAuthorizeOrg.href);
			sNonceParam = urlAuthorizeOrg.searchParams.get("nonce") ?? ""; // parse: nonce from: sUrlAuthorizeOrg
			return Promise.resolve(urlAuthorizeOrg); // App-Registration from UCServer
			// App-Registration from config, alternative App-Registration KEIN asnLogon() am UCServer moeglich!
			return getUrlAuthorizeFromAppRegistration();
		})
		.then(urlAuthorizeOrg => {
			// der: urlAuthorizeOrg ruft den OpenId-Provider LoginWizard.
			urlAuthorizeOrg.searchParams.append("redirect_uri", `${document.location.origin}/redirect.html`);
			/*
			* mit dem anfuegen des: redirect_uri ist der: urlAuthorizeOrg komplett!
			* wir haben alles fuer einen start des OpenId-Provider LoginWizard.
			* Ob das redirect.html#id_token=...  fuer ein asnLogon() am UCServer taugt
			* sehen wir an der ClientId (Claim "aud"). Der muss: (general.xml, SETTINGS/EntraId/ClientId) sein!
			*/

			if (getUserIdFromUserId(sUserId).length)
				urlAuthorizeOrg.searchParams.append("login_hint", getUserIdFromUserId(sUserId));
			if (!urlAuthorizeOrg.searchParams.has("nonce") && sNonceParam.length)
				urlAuthorizeOrg.searchParams.append("nonce", sNonceParam);
			console.assert(urlAuthorizeOrg.searchParams.has("nonce"), "nonce is required!");
			console.log("urlAuthorizeOrg:", urlAuthorizeOrg.href);
			/*
			* mit dem erfolgreichen: discoverEntraId() endet die lebensdauer dieser seite -> OnUnLoad
			* es wird mit: redirect.html fortgesetzt ...
			* An dieser stelle: redirect.html/js beginnt dann das drama bzw. die herausforderung
			* die UCSID wieder-her-zu-stellen/neu-zu-ermitteln denn die ist ja, durch das unload, verloren
			*/
			window.location.replace(urlAuthorizeOrg);
		})
		.catch(_e => {
			// console.log("exception caught:", e);
			console.log("discover:", sUCSID, "FAILED");
			localStorage.removeItem("userid");
		});
}
function getUrlAuthorizeFromAppRegistration(): Promise<URL> {
	/*
	* wir haben mehrere appRegistration-xxx.json configs! alle muessen:
	* - Implizite Genehmigung und Hybridflows ...
	* - Zugriffs/ID-Token
	* - redirectUri: http://localhost:5173/redirect.html
	* Technisch wird hier nur die: Anwendungs-ID (Client) verwendet.
	* damit wir es nicht so leicht verwechseln schreiben wir den: displayName dazu.
	* Im ersten schritt untersuchen wir SSO fuer unterschiedliche Anwendungs-ID's am GLEICHEN Mandant/Tenant
	*/
	const selClientId = document.getElementById("selClientId") as HTMLSelectElement;
	const appRegistration = selClientId.value.length ? selClientId.value : "./appRegistration.json";
	return new Promise((resolve, _reject) => {
		fetch(appRegistration)
			.then(response => response.json())
			.then(oAppRegistration => {
				// console.log("AppRegistration:", oAppRegistration);
				const urlAuthorize = new URL(`https://login.microsoftonline.com/${oAppRegistration.tenantId}/oauth2/v2.0/authorize`);
				urlAuthorize.searchParams.append("response_type","id_token");
				urlAuthorize.searchParams.append("response_mode", "fragment");
				urlAuthorize.searchParams.append("scope", "openid profile");
				urlAuthorize.searchParams.append("nonce", "nonce-created-by-server");
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

	const selClientId = document.getElementById("selClientId") as HTMLSelectElement;
	// console.log("appRegistration:", selClientId.value);
	selClientId.addEventListener("change", () => {
		getUrlAuthorizeFromAppRegistration()
			.then(urlAuthorizeOrg => {
				// der: urlAuthorizeOrg ruft den OpenId-Provider LoginWizard.
				urlAuthorizeOrg.searchParams.append("redirect_uri", `${document.location.origin}/redirect.html`);
				// some optimizations skip pages from Login-Wizard
				// urlAuthorizeOrg.searchParams.append("domain_hint", getUserIdFromUserId(sUserId));
				// urlAuthorizeOrg.searchParams.append("login_hint", getUserIdFromUserId(sUserId));
				// urlAuthorizeOrg.searchParams.append("prompt", "none" | "consent" | "login" | ...);
				/*
				* mit dem anfuegen des: redirect_uri ist der: urlAuthorizeOrg komplett!
				* wir haben alles fuer einen start des OpenId-Provider LoginWizard.
				*/
				console.log("urlAuthorizeOrg:", urlAuthorizeOrg.href);
				window.location.replace(urlAuthorizeOrg);
			});
		});
	const btnFetchOpenIdConfig = document.getElementById("btnFetchOpenIdConfig") as HTMLButtonElement;
	const lblTenantId = document.getElementById("lblTenantId") as HTMLInputElement;
	btnFetchOpenIdConfig.addEventListener("click", () => {
		const tenant = lblTenantId.value;
		// [Find your app's OpenID configuration document URI](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols-oidc#find-your-apps-openid-configuration-document-uri)
		window.location.replace(`https://login.microsoftonline.com/${tenant}/v2.0/.well-known/openid-configuration`);
	});

	fetch(selClientId.value)
		.then(response => response.json())
		.then(oAppRegistration => {
			lblTenantId.value = oAppRegistration.tenantId;
		});

	const btnSignOut = document.getElementById("btnSignOut") as HTMLButtonElement;
	btnSignOut.addEventListener("click", () => {
		const tenant = lblTenantId.value;
		// [Send a sign-out request](https://learn.microsoft.com/en-us/entra/identity-platform/v2-protocols-oidc#send-a-sign-out-request)
		window.location.replace(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/logout`);
	});

	const edtUserId = document.getElementById("edtUserId") as HTMLInputElement;
	edtUserId.addEventListener("input", (event: Event) => {
		const sUserId =  (event.target as HTMLInputElement).value;
		const sUCSID = getUCSIDFromUserId(sUserId);
		if(0 == sUserId.length) return;
		discoverUCSID(sUCSID)
			.then(sOrigin => discoverEntraId(sOrigin, sUCSID))
			.then(urlAuthorize => {
				btnCreateUrlAuthorize.disabled = false;

				/*
				* der vom UCServer bereitgestellte: urlAuthorize ist in mehrfacher hinsicht (sch...)
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