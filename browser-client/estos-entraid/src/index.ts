/*
* publish/usage:
* npm link & npm link estos-entraid
* npm i --save estos-entraid
* import { config } from "estos-entraid";
*/
export var config = {
	sUCSID: "estos.de", // riroyabihi | ws0021.local
	sControllerUrl: "https://uccontroller.ucconnect.de"
};

export function getUCSIDFromUserId(sUserId: string): string {
	const rgParts = sUserId.split("@");
	if(1 >= rgParts.length) return sUserId; // UCSID od. empty
	return sUserId.split("@")[1]; // domain-anteil od. empty
}
export function getUserIdFromUserId(sUserId: string): string {
/*
* prueft ob es sich sematisch um eine UserId (EMail) handelt und liefert empty im fehlerfall.
* was fuer ein bescheuerter Name fuer eine Funktion ... wirklich?
* der postfix: "FromUserId" erleichtert es dem entwickler den zusammenhang/abhengigkeit zu: getUCSIDFromUserId erkennen
* wir ersparen uns ein: isUserName()
*/
	if(2 !== sUserId.split("@").length) return "";
	return sUserId;
}
export async function discoverUCSID(sUCSID: string) {
/*
* mit diesem, ersten, discover ermitteln wir ob unser UCWeb gueltig ist und laeuft
* indem wir den: sOrigin der UCWeb-Instanz liefern.
*/
	const sDiscoverClient = `${config.sControllerUrl}/controller/client/ucws?ucsid=${sUCSID}`;
	return fetch(sDiscoverClient)
		.then(response => {
			/*
			* folgende faelle muessen behandelt werden:
			* 1.) "ucsid" ist unbekannt
			*/
			if (!response.ok || response.status === 204)
				throw Error(response.statusText); // ist dummerweise LEER

			// 2.) UCConnect (controller) laeuft nicht
			// 3.) UCServer laeuft nicht
			// 4.) UCServer ist NICHT fuer EntraId configuriert (error invalid login)
			return response.json(); // happy-case => there's always a body
		})
		.then(data => data.redirect);
}
export async function discoverEntraId(sOrigin: string, sUCSID: string) {
/*
* mit diesem, zweiten, discover ermitteln wir ob unser UCServer fuer EntraId konfiguriert ist
* general.xml, Settings/UserManager/UserReplicator
*/
/*
* queryParameter: (format=json)
* sorgt dafuer das wir einen JSON Result bekommen.
* ohne bekommen wir einen UNBRAUCHBAREN 302.
	console.log("sOrigin:", sOrigin);
*/
	const urlCreateSession = `${sOrigin}/ws/client/createsession?format=json`;
	const oInit = {
			method: "GET",
			headers: {
				"Authorization": `Basic realm="${sUCSID}", scope="entraid fragment"`,
				"X-UCSID": sUCSID
			}
		};
	return fetch(urlCreateSession, oInit)
		.then(response => response.json())
		.then(data => data.redirect);
}
export async function discoverHost() {
/*
* Async functions always return a promise.
* If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
*/
	const oArgument = {
				_type: "AsnNegotiateServerConnectionArgument",
				iClientProtocolVersion: 70,
				optionalParams: {
					SoftphoneClient: true,
					ProvideAVLine: true
				}
			},
		oInit = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
			body: JSON.stringify(oArgument)
		};
	const rNegotiate = await fetch("http://ecticlient.local/asnWebRequest/asnNegotiateServerConnection", oInit);
	return rNegotiate.json();
}
