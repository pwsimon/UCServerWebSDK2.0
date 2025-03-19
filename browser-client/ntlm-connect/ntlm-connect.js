function discoverAuthenticate() {
	return fetch(document.location.origin + "/ws/client/ucserverversion")
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
					"x-no401": 1
				},
				body: JSON.stringify(oNegotiate)
			});
		})
		.then(response => {
			// JA ich kann hier ein: `if (response.status === 401)` machen, aber das ist nicht der Punkt
			// Der Browser-Prompt wird schon angezeigt, bevor ich diese Zeile erreiche
			return response.headers.get("www-authenticate");
		});
}
function loginNTLM() {
	return fetch(document.location.origin + "/ws/client/ucserverversion")
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
					"X-EPID": "generierte GUID"
				},
				body: JSON.stringify(oNegotiate)
			});
		})
		.then(response => response.json())
		.then(oSession => {
			return oSession.sessionid;
		});
}
window.onload = () => {
	discoverAuthenticate().then(wwwAuthenticate => {
		console.log("wwwAuthenticate:", wwwAuthenticate);
		wwwAuthenticate.split(", ").forEach(sAuthenticate => {
			if (sAuthenticate.startsWith("Negotiate")) {
				console.log("Negotiate:", sAuthenticate);
			} else if (sAuthenticate.startsWith("NTLM")) {
				console.log("NTLM:", sAuthenticate);
			} else if (sAuthenticate.startsWith("Basic")) {
				console.log("Basic:", sAuthenticate);
			}
		});
	});

	loginNTLM().then(sSessionID => {
		console.log("SessionID:", sSessionID);
	});
};