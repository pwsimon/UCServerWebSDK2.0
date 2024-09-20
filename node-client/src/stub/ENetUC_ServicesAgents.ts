// [PrintTSCodeOne]
// [PrintTSComments]
/*
 * ENetUC_ServicesAgents.ts
 * "UC-Server-Access-Protocol-AgentServices" ASN.1 stubs.
 * This file was generated by estos esnacc (V6.0.19, 20.09.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
/**
 * API for Server to Server Agents functionality
 * ## Module description
 * This module defines structures and operations for a agent functionality backend other than UCServer or PBX.
 *
 * ## Prerequisite for using the interface
 * - The other service needs a socket for secure data Transmission between client-server and vise versa.
 * - Installation of ProCall Software in advance at the client side
 * - Login the other service at the UCServer
 * - Provide IDs (full canonical telephone numbers or user IDs) of the User, which should use the agnet functionality
 * - Attach to Events for the user commands (like logon or logoff)
 * - Provide state changes of the agent with its IDas event to the UCServer
 * - While closing the connection, detach from events first, unregister IDs and close socket connection to the UCServer.
 *
 *
 * ## Functionalities
 * - If the user can be recognized as agnet user oft the other server it will gain the client UI for agnet state changes
 * - User commands according state changes of the user will be provided to the other service
 * - State changes from the other service will be provided to the corresponding clients
 *
 * ## Sequence diagram
 * \"Call\": Like a RPC Call, expect results or errors as an answer.
 *
 * \"Event\": Behaviour is like an event it is named, this call will not have any results sent back.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * UML section is not exported to this file!
 */
// [PrintTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_ServicesAgents";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum AsnNetServicesAgentsErrors {
	/** all went fine */
	noerror = 0,
	/** access to interface denied, maybe not logged in or with wrong account */
	accessdenied = 1,
	/** missing agent id where it is needed */
	agentidmissing = 2,
	/** missing group id where it is needed */
	groupidmissing = 3,
	/** missing agent state where it is needed */
	agentstatemissing = 4,
	/** capabilities missing where needed */
	agentcapabilitiesmissing = 5,
	/** service id missing where it is needed */
	serviceidmissing = 6,
	/** the service id given was not correct */
	wrongserviceid = 7,
	/** the service given has already a running connection */
	servicealreadyconnected = 8,
	/** the service cannot be allocated in the ucserver */
	serviceallocationfailed = 9,
	/** the service has no registered agents */
	noagentsregistered = 10,
	/** the agent list expected was empty */
	noagentsgiven = 11
}

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum AsnServiceAgentStateFailedReasonEnum {
	/** The AgenID is unknown */
	eUNKNOWNAGENT = 0,
	/** The state to set is not one of AsnAgentStateEnum */
	eUNKNOWNSTATE = 1
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Additional data that may be required to login\/monitor ACD groups of a PBX.
 */
export class AsnAgentACDLoginData {
	public constructor(that: AsnAgentACDLoginData) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnAgentACDLoginData {
		return new AsnAgentACDLoginData({
			u8sAgentID: "",
			u8sGroupID: "",
			u8sPassword: "",
			u8sDeviceID: ""
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sAgentID",
			"u8sGroupID",
			"u8sPassword",
			"u8sDeviceID"
		];
		return p;
	}

	public static type = "AsnAgentACDLoginData";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnAgentACDLoginData",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sAgentID" }),
				new asn1ts.Utf8String({ name: "u8sGroupID" }),
				new asn1ts.Utf8String({ name: "u8sPassword" }),
				new asn1ts.Utf8String({ name: "u8sDeviceID" }),
				new asn1ts.Extension()
			]
		});
	}

	/** The agent ID on the PBX (PIN); this probably has to be requested by the user */
	public u8sAgentID!: string;
	/** The group ID on the PBX */
	public u8sGroupID!: string;
	/** A password may also be required to log in */
	public u8sPassword!: string;
	/** [TODO: what is \"DeviceID\" for? It is possible as a parameter in the system] */
	public u8sDeviceID!: string;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Structure with the agent information needed whcih is exchanegd between the agent service and the UCServer.
 */
export class AsnServiceAgent {
	public constructor(that: AsnServiceAgent) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnServiceAgent {
		return new AsnServiceAgent({
			u8sGroupID: "",
			u8sAgentID: ""
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sGroupID",
			"u8sAgentID"
		];
		if (bIncludeOptionals) {
			p.push(
				"u8sAgentDisplayName",
				"iAgentState",
				"iPossibleAgentStates",
				"iRequiredLoginLogoutParams"
			);
		}
		return p;
	}

	public static type = "AsnServiceAgent";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnServiceAgent",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sGroupID" }),
				new asn1ts.Utf8String({ name: "u8sAgentID" }),
				new asn1ts.Utf8String({ name: "u8sAgentDisplayName", idBlock: { optionalID: 0 } }),
				new asn1ts.Integer({ name: "iAgentState", idBlock: { optionalID: 1 } }),
				new asn1ts.Integer({ name: "iPossibleAgentStates", idBlock: { optionalID: 2 } }),
				new asn1ts.Integer({ name: "iRequiredLoginLogoutParams", idBlock: { optionalID: 3 } }),
				new asn1ts.Extension()
			]
		});
	}

	/**
	 * ID of the agent group the agent or line number is member of. The combination of AgentID and GroupID is treated as unique for a service.
	 * Groups are used to combine different Agents into one controlling UI component.
	 * So it is possible to combine different phone lines of a user into one Agent-UI component for this user.
	 * If different Agents should have an \"own\" Button in the UCClient, they should have different GroupIDs or vice versa.
	 */
	public u8sGroupID!: string;
	/**
	 * ID of the Agent; should be a phone number like +498151368560 or a UserID like sip:sam.test\@estos.de, which corresponds with the identity of the UCServer User.
	 * Internally the Agent will be idetified with &lt;agendid&gt;\/&lt;groupid&gt;\@&lt;serviceid&gt;, so this combination has to be unique on the UCService.
	 */
	public u8sAgentID!: string;
	/**
	 * A displayable name of the Agent to show in the UI of the UCClient. If not given, the above AgnentID will be shown.
	 * This field is used while registration to give the agent a more readable name for the user interface.
	 *
	 * For deregistering the agent, you can leave this field unset;
	 */
	public u8sAgentDisplayName?: string;
	/**
	 * While registration of the agent this field contains the initial agent state. Should be 0 if not known. Value can be one of AsnAgentStateEnum.
	 * This field is also used for changing the state of the agent.
	 *
	 * For deregistering the agent, you can leave this field unset;
	 */
	public iAgentState?: number;
	/**
	 * The service defines in this bitfield, which agent states are supported\/can be requested using the Bit enumeration AsnSupportedAgentStatesEnum.
	 * eAGENTSTATELOGGEDOUT(1)					- \"log out\"
	 * eAGENTSTATELOGGEDINNOTREADY(2),			- \"not ready\"
	 * eAGENTSTATELOGGEDINREADY(4),				- \"ready\"
	 * eAGENTSTATELOGGEDINBUSY(8),				- \"busy\"
	 * eAGENTSTATELOGGEDINWORKINGAFTERCALL(16)	- \"working after call\"
	 *
	 * For deregistering the agent, you can leave this field unset;
	 */
	public iPossibleAgentStates?: number;
	/**
	 * The Bitfield is set while registration of the agent and supports the following values from AsnAgentLoginRequiredParametersEnum:
	 * eAGENTLOGINREQUIRESAGENTID(1),	 - AgentID Required (for example, the PIN)
	 * eAGENTLOGINREQUIRESGROUPID(2),	 - GroupID Required			- not yet supported by ucclient
	 * eAGENTLOGINREQUIRESPASSWORD(4),   - Password Required		- not yet supported by ucclient
	 * eAGENTLOGINREQUIRESDEVICEID(8)	 - DeviceID Required		- not yet supported by ucclient
	 * eAGENTLOGOUTREQUIRESPASSWORD(256) - Logout requires password	- not yet supported by ucclient
	 *
	 * For deregistering the agent, you can leave this field unset;
	 */
	public iRequiredLoginLogoutParams?: number;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Result of asnRegisterAgents
 */
export class AsnRegisterServiceAgentsResult {
	public constructor(that: AsnRegisterServiceAgentsResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnRegisterServiceAgentsResult {
		return new AsnRegisterServiceAgentsResult({
			u8sServiceID: "",
			bSuccess: false
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sServiceID",
			"bSuccess"
		];
		return p;
	}

	public static type = "AsnRegisterServiceAgentsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnRegisterServiceAgentsResult",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sServiceID" }),
				new asn1ts.Boolean({ name: "bSuccess" }),
				new asn1ts.Extension()
			]
		});
	}

	/** The unique ID of the Service the agents will be registered to on the UCServer. */
	public u8sServiceID!: string;
	/** true if the call was successful. If the call fails, the AsnRequestError structure will contain the details. */
	public bSuccess!: boolean;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Result of asnUnregisterServiceAgents
 */
export class AsnUnregisterServiceAgentsResult {
	public constructor(that: AsnUnregisterServiceAgentsResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnUnregisterServiceAgentsResult {
		return new AsnUnregisterServiceAgentsResult({
			bSuccess: false
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"bSuccess"
		];
		return p;
	}

	public static type = "AsnUnregisterServiceAgentsResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnUnregisterServiceAgentsResult",
			...params,
			value: [
				new asn1ts.Boolean({ name: "bSuccess" }),
				new asn1ts.Extension()
			]
		});
	}

	/** true if the call was successful. If the call fails, the AsnRequestError structure will contain the details. */
	public bSuccess!: boolean;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnServiceAgentStateFailedReason {
	public constructor(that: AsnServiceAgentStateFailedReason) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnServiceAgentStateFailedReason {
		return new AsnServiceAgentStateFailedReason({
			u8sServiceAgentID: "",
			iFailedReason: 0
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sServiceAgentID",
			"iFailedReason"
		];
		return p;
	}

	public static type = "AsnServiceAgentStateFailedReason";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnServiceAgentStateFailedReason",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sServiceAgentID" }),
				new asn1ts.Integer({ name: "iFailedReason" }),
				new asn1ts.Extension()
			]
		});
	}

	/** ID of the agent to set the state for. It is the same which was given with asnRegisterServiceAgents. */
	public u8sServiceAgentID!: string;
	/** The desired state of the agent as described in AsnServiceAgentStateFailedReasonEnum. */
	public iFailedReason!: number;
}

// [PrintTSTypeDefCode]
// [PrintTSSetOfDefCode]
// [PrintTSListClass]
export class AsnServiceAgentList extends Array<AsnServiceAgent> {
	public static getASN1Schema(params?: asn1ts.SequenceOfParams): asn1ts.SequenceOf {
		return new asn1ts.SequenceOf({
			...params,
			value: AsnServiceAgent.getASN1Schema()
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for asnRegisterServiceAgents
 */
export class AsnRegisterServiceAgentsArgument {
	public constructor(that: AsnRegisterServiceAgentsArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnRegisterServiceAgentsArgument {
		return new AsnRegisterServiceAgentsArgument({
			u8sServiceID: "",
			listAgents: new AsnServiceAgentList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sServiceID",
			"listAgents"
		];
		if (bIncludeOptionals)
			p.push("bClearExistingAgents");
		return p;
	}

	public static type = "AsnRegisterServiceAgentsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnRegisterServiceAgentsArgument",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sServiceID" }),
				AsnServiceAgentList.getASN1Schema({ name: "listAgents" }),
				new asn1ts.Boolean({ name: "bClearExistingAgents", idBlock: { optionalID: 0 } }),
				new asn1ts.Extension()
			]
		});
	}

	/**
	 * ID of the Service to distinguish the agents from different services. To us a unique string like GUID
	 * is recommended.
	 * The ID is used to attach to the right Agents after a connection loss to the UCServer for example.
	 */
	public u8sServiceID!: string;
	/** List of agents with the needed information to register and  the inital agent state. */
	public listAgents!: AsnServiceAgentList;
	/**
	 * If given and set to true, pre-existing Agents of this Service will be removed
	 * from UCServer memory and replaced with the given list of agents.
	 */
	public bClearExistingAgents?: boolean;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for asnUnregisterServiceAgents
 */
export class AsnUnregisterServiceAgentsArgument {
	public constructor(that: AsnUnregisterServiceAgentsArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnUnregisterServiceAgentsArgument {
		return new AsnUnregisterServiceAgentsArgument({
			u8sServiceID: "",
			listAgents: new AsnServiceAgentList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sServiceID",
			"listAgents"
		];
		if (bIncludeOptionals)
			p.push("bClearExistingAgents");
		return p;
	}

	public static type = "AsnUnregisterServiceAgentsArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnUnregisterServiceAgentsArgument",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sServiceID" }),
				AsnServiceAgentList.getASN1Schema({ name: "listAgents" }),
				new asn1ts.Boolean({ name: "bClearExistingAgents", idBlock: { optionalID: 0 } }),
				new asn1ts.Extension()
			]
		});
	}

	/** The unique ID of the Service the agents will be unregistered from the UCService. */
	public u8sServiceID!: string;
	/** List of agents with the needed information to unregister from the UCService. */
	public listAgents!: AsnServiceAgentList;
	/** If given and set to true, all agents will be removed, the AsnServiceAgentList can be left empty then. */
	public bClearExistingAgents?: boolean;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for asnSetAgentStates
 */
export class AsnSetServiceAgentStatesArgument {
	public constructor(that: AsnSetServiceAgentStatesArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnSetServiceAgentStatesArgument {
		return new AsnSetServiceAgentStatesArgument({
			listServiceAgentStates: new AsnServiceAgentList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"listServiceAgentStates"
		];
		return p;
	}

	public static type = "AsnSetServiceAgentStatesArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnSetServiceAgentStatesArgument",
			...params,
			value: [
				AsnServiceAgentList.getASN1Schema({ name: "listServiceAgentStates" }),
				new asn1ts.Extension()
			]
		});
	}

	/** List of service agents with their new state. */
	public listServiceAgentStates!: AsnServiceAgentList;
}

// [PrintTSTypeDefCode]
// [PrintTSSetOfDefCode]
// [PrintTSListClass]
export class AsnServiceAgentStateFailedReasonList extends Array<AsnServiceAgentStateFailedReason> {
	public static getASN1Schema(params?: asn1ts.SequenceOfParams): asn1ts.SequenceOf {
		return new asn1ts.SequenceOf({
			...params,
			value: AsnServiceAgentStateFailedReason.getASN1Schema()
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for AsnResponseSetServiceAgentStatesFailed
 */
export class AsnResponseSetServiceAgentStatesFailedArgument {
	public constructor(that: AsnResponseSetServiceAgentStatesFailedArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnResponseSetServiceAgentStatesFailedArgument {
		return new AsnResponseSetServiceAgentStatesFailedArgument({
			listServiceAgentStates: new AsnServiceAgentStateFailedReasonList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"listServiceAgentStates"
		];
		return p;
	}

	public static type = "AsnResponseSetServiceAgentStatesFailedArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnResponseSetServiceAgentStatesFailedArgument",
			...params,
			value: [
				AsnServiceAgentStateFailedReasonList.getASN1Schema({ name: "listServiceAgentStates" }),
				new asn1ts.Extension()
			]
		});
	}

	/** List of AsnServiceAgentStateFailedReason. */
	public listServiceAgentStates!: AsnServiceAgentStateFailedReasonList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for asnEventServiceAgentStateChanged
 */
export class AsnRequestServiceAgentStateChangeArgument {
	public constructor(that: AsnRequestServiceAgentStateChangeArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnRequestServiceAgentStateChangeArgument {
		return new AsnRequestServiceAgentStateChangeArgument({
			serviceAgentState: AsnServiceAgent["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"serviceAgentState"
		];
		return p;
	}

	public static type = "AsnRequestServiceAgentStateChangeArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnRequestServiceAgentStateChangeArgument",
			...params,
			value: [
				AsnServiceAgent.getASN1Schema({ name: "serviceAgentState" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Agent and its state */
	public serviceAgentState!: AsnServiceAgent;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for asnEventServiceAgentStateChanged
 */
export class AsnRequestServiceAgentLoginArgument {
	public constructor(that: AsnRequestServiceAgentLoginArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnRequestServiceAgentLoginArgument {
		return new AsnRequestServiceAgentLoginArgument({
			serviceAgentState: AsnServiceAgent["initEmpty"].call(0),
			loginParameter: AsnAgentACDLoginData["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"serviceAgentState",
			"loginParameter"
		];
		return p;
	}

	public static type = "AsnRequestServiceAgentLoginArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnRequestServiceAgentLoginArgument",
			...params,
			value: [
				AsnServiceAgent.getASN1Schema({ name: "serviceAgentState" }),
				AsnAgentACDLoginData.getASN1Schema({ name: "loginParameter" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Agent and its state */
	public serviceAgentState!: AsnServiceAgent;
	/** Required login information */
	public loginParameter!: AsnAgentACDLoginData;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for asnEventServiceAgentStateChanged
 */
export class AsnRequestServiceAgentLogoutArgument {
	public constructor(that: AsnRequestServiceAgentLogoutArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnRequestServiceAgentLogoutArgument {
		return new AsnRequestServiceAgentLogoutArgument({
			serviceAgentState: AsnServiceAgent["initEmpty"].call(0),
			u8sLogoutData: ""
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"serviceAgentState",
			"u8sLogoutData"
		];
		return p;
	}

	public static type = "AsnRequestServiceAgentLogoutArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnRequestServiceAgentLogoutArgument",
			...params,
			value: [
				AsnServiceAgent.getASN1Schema({ name: "serviceAgentState" }),
				new asn1ts.Utf8String({ name: "u8sLogoutData" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Agent and its state */
	public serviceAgentState!: AsnServiceAgent;
	/** If needed for the service, additional logout password (PIN) is provided here */
	public u8sLogoutData!: string;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Argument for asnRequestServiceAgentsStatusUpdate
 * The UCServer needs an update of the current state of the given agents. If the list is empty, the service should
 * update all agents which are connected to the agent service.
 */
export class AsnRequestServiceAgentsStatusUpdateArgument {
	public constructor(that: AsnRequestServiceAgentsStatusUpdateArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnRequestServiceAgentsStatusUpdateArgument {
		return new AsnRequestServiceAgentsStatusUpdateArgument({
			listServiceAgents: new AsnServiceAgentList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"listServiceAgents"
		];
		return p;
	}

	public static type = "AsnRequestServiceAgentsStatusUpdateArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnRequestServiceAgentsStatusUpdateArgument",
			...params,
			value: [
				AsnServiceAgentList.getASN1Schema({ name: "listServiceAgents" }),
				new asn1ts.Extension()
			]
		});
	}

	/** List of AgentIDs which states should be updated on the UCServer. */
	public listServiceAgents!: AsnServiceAgentList;
}