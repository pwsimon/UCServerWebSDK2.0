window.onload = () => {
	console.log("ntlm-connect.js loaded():", document.location.origin);
	fetch(document.location.origin + "/ws/client/ucserverversion")
	.then(response => response.json())
	.then(oUCServerVersion => {
		console.log("UCServerVersion:", oUCServerVersion);
		const oNegotiate = {
			negotiate: {
				iClientProtocolVersion: oUCServerVersion.ucserverprotocolversion // 61, 70
			}
		};
		return fetch(document.location.origin + "/ws/client/createsession?clientappid=9", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-EPID": "generierte GUID",
			},
			body: JSON.stringify(oNegotiate)
		});
	})
	.then(response => response.json())
	.then(oSession => {
		console.log("Session:", oSession.sessionid);
	});
};