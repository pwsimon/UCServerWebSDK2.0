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
	const sUserId = localStorage.getItem("userid") ?? "";
	console.assert(0 < sUserId.length, "UserId is Mandatory!");
	const sUCSID = getUCSIDFromUserId(sUserId);
	if(0 == sUserId.length) return;
	discoverUCSID(sUCSID)
		.then(sOrigin => discoverEntraId(sOrigin, sUCSID))
		.then(sUrlAuthorize => {
			// console.log("sUrlAuthorize:", sUrlAuthorize);
			const sRedirect = "&redirect_uri=" + encodeURIComponent("http://localhost:5173/redirect.html"); //document.location
			const sLoginHint: string = getUserIdFromUserId(sUserId).length ? "&login_hint=" + getUserIdFromUserId(sUserId) : "";
			const urlAuthorize = sUrlAuthorize.concat(sRedirect, sLoginHint);
			console.log("urlAuthorize:", urlAuthorize);
			window.location.replace(urlAuthorize);
		})
		.catch(_e => {
			// console.log("exception caught:", e);
			console.log("discover:", sUCSID, "FAILED");
			localStorage.removeItem("userid");
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
				console.log("try:", sUCSID, "SUCCEEDED");
				localStorage.setItem("userid", sUserId);

				let urlAuthorize = new URL(sUrlAuthorize);
				btnCreateUrlAuthorize.disabled = false;
				lblTenantId.value = urlAuthorize.pathname.substring(1, 37); // parse: tenant from: sUrlAuthorize
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
		createUrlAuthorize(); // try automatic login
	}
});