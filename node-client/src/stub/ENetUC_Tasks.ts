// [PrintTSCodeOne]
// [PrintTSComments]
/*
 * ENetUC_Tasks.ts
 * "UC-Server-Access-Protocol-Tasks" ASN.1 stubs.
 * This file was generated by estos esnacc (V6.0.19, 20.09.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
/**
 * Task management interface
 * ## Module description
 * This module defines structures and operations for the task managment in the UCServer.
 */
// [PrintTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_SIPCTI from "./ENetUC_Common_SIPCTI";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_Tasks";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum AsnTaskState {
	notstarted = 0,
	inprogress = 1,
	waitingforothers = 2,
	deferred = 3,
	done = 4
}

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum AsnTaskPriority {
	low = 0,
	normal = 1,
	high = 2
}

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum AsnTaskPrivacy {
	normal = 0,
	personal = 1,
	private1 = 2,
	confidential = 3
}

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum AsnTaskDelegationState {
	accepted = 0,
	waiting = 1,
	declined = 2
}

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum AsnNetDatabaseTaskFindFlagsV2 {
	/** 0x00000001 - Nur die Tasks, die ein Startdatum haben */
	onlywithstartdate = 1,
	/** 0x00000002 - Nur die Tasks, die kein Startdatum haben */
	onlywithoutstartdate = 2,
	/** 0x00000004 - Nur die Tasks, die noch nicht erledigt sind */
	onlynotfinished = 4,
	/** 0x00000008 - Nur die Tasks, die noch nicht begonnen wurden */
	onlynotstarted = 8,
	/** 0x00000010 - Alle Tasks, die Privacy Normal haben */
	allnormal = 16,
	/** 0x00000020 - Delegate status accepted */
	delegateaccepted = 32,
	/** 0x00000040 - Delegate status declined */
	delegatedeclined = 64,
	/** 0x00000080 - Delegate status waiting */
	delegatewaiting = 128
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnNetDatabaseTaskFindOptionsV2 {
	public constructor(that: AsnNetDatabaseTaskFindOptionsV2) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnNetDatabaseTaskFindOptionsV2 {
		return new AsnNetDatabaseTaskFindOptionsV2({
			eFlags: 0,
			iMaxNumEntries: 0,
			stUTCStartDateFrom: new Date(),
			stUTCStartDateTo: new Date(),
			u8slistOwnerNames: new ENetUC_Common.UTF8StringList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"eFlags",
			"iMaxNumEntries",
			"stUTCStartDateFrom",
			"stUTCStartDateTo",
			"u8slistOwnerNames"
		];
		return p;
	}

	public static type = "AsnNetDatabaseTaskFindOptionsV2";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnNetDatabaseTaskFindOptionsV2",
			...params,
			value: [
				new asn1ts.Integer({ name: "eFlags" }),
				new asn1ts.Integer({ name: "iMaxNumEntries" }),
				new asn1ts.Real({ name: "stUTCStartDateFrom" }),
				new asn1ts.Real({ name: "stUTCStartDateTo" }),
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8slistOwnerNames" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Bitfeld mit weiteren Filtern */
	/** (see AsnNetDatabaseTaskFindFlagsV2) */
	public eFlags!: number;
	/** Maximale Anzahl der Datensätze */
	public iMaxNumEntries!: number;
	/** Filter auf \"StartDate\", von */
	public stUTCStartDateFrom!: Date;
	/** Filter auf \"StartDate\", bis. */
	public stUTCStartDateTo!: Date;
	/** NICHT IMPLEMENTIERT Die CTI-Benutzernamen, deren Tasks geholt werden sollen */
	public u8slistOwnerNames!: ENetUC_Common.UTF8StringList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Result of the asnGetTaskEntryCount and asnTaskGetEntryCount operation
 */
export class AsnTaskGetEntryCountResult {
	public constructor(that: AsnTaskGetEntryCountResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskGetEntryCountResult {
		return new AsnTaskGetEntryCountResult({
			iCount: 0
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"iCount"
		];
		return p;
	}

	public static type = "AsnTaskGetEntryCountResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskGetEntryCountResult",
			...params,
			value: [
				new asn1ts.Integer({ name: "iCount" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Anzahl der beschriebenen Entries */
	public iCount!: number;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskAddEntryResult {
	public constructor(that: AsnTaskAddEntryResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskAddEntryResult {
		return new AsnTaskAddEntryResult({
			iResult: 0,
			u8sAddedTaskID: ""
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"iResult",
			"u8sAddedTaskID"
		];
		return p;
	}

	public static type = "AsnTaskAddEntryResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskAddEntryResult",
			...params,
			value: [
				new asn1ts.Integer({ name: "iResult" }),
				new asn1ts.Utf8String({ name: "u8sAddedTaskID" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Erfolgreich: 0, sonst != 0 */
	public iResult!: number;
	/** Wenn erfolgreich, dann steht hier die neu erzeugte TaskID drin. */
	public u8sAddedTaskID!: string;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskRemoveEntriesArgument {
	public constructor(that: AsnTaskRemoveEntriesArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskRemoveEntriesArgument {
		return new AsnTaskRemoveEntriesArgument({
			u8slistTaskID: new ENetUC_Common.UTF8StringList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8slistTaskID"
		];
		return p;
	}

	public static type = "AsnTaskRemoveEntriesArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskRemoveEntriesArgument",
			...params,
			value: [
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8slistTaskID" }),
				new asn1ts.Extension()
			]
		});
	}

	/** ID des Tasks der gelöscht werden soll */
	public u8slistTaskID!: ENetUC_Common.UTF8StringList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskRemoveEntriesResult {
	public constructor(that: AsnTaskRemoveEntriesResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskRemoveEntriesResult {
		return new AsnTaskRemoveEntriesResult({
			dummy: null
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"dummy"
		];
		return p;
	}

	public static type = "AsnTaskRemoveEntriesResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskRemoveEntriesResult",
			...params,
			value: [
				new asn1ts.Null({ name: "dummy" }),
				new asn1ts.Extension()
			]
		});
	}

	public dummy!: null;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskModifyEntriesResult {
	public constructor(that: AsnTaskModifyEntriesResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskModifyEntriesResult {
		return new AsnTaskModifyEntriesResult({
			dummy: null
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"dummy"
		];
		return p;
	}

	public static type = "AsnTaskModifyEntriesResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskModifyEntriesResult",
			...params,
			value: [
				new asn1ts.Null({ name: "dummy" }),
				new asn1ts.Extension()
			]
		});
	}

	public dummy!: null;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskSetEntriesStateResult {
	public constructor(that?: AsnTaskSetEntriesStateResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskSetEntriesStateResult {
		return new AsnTaskSetEntriesStateResult();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		return p;
	}

	public static type = "AsnTaskSetEntriesStateResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskSetEntriesStateResult",
			...params,
			value: [
				new asn1ts.Extension()
			]
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * NICHT IMPLEMENTIERT
 */
export class AsnTaskDelegateEntriesArgument {
	public constructor(that: AsnTaskDelegateEntriesArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskDelegateEntriesArgument {
		return new AsnTaskDelegateEntriesArgument({
			u8slistTaskIDs: new ENetUC_Common.UTF8StringList(),
			u8slistOwners: new ENetUC_Common.UTF8StringList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8slistTaskIDs",
			"u8slistOwners"
		];
		return p;
	}

	public static type = "AsnTaskDelegateEntriesArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskDelegateEntriesArgument",
			...params,
			value: [
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8slistTaskIDs" }),
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8slistOwners" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Liste der TaskIDs, deren Bearbeiter gesetzt werden sollen */
	public u8slistTaskIDs!: ENetUC_Common.UTF8StringList;
	/** Liste der Kontakte, die der Task zugeweisen werden soll */
	public u8slistOwners!: ENetUC_Common.UTF8StringList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskDelegateEntriesResult {
	public constructor(that?: AsnTaskDelegateEntriesResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskDelegateEntriesResult {
		return new AsnTaskDelegateEntriesResult();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		return p;
	}

	public static type = "AsnTaskDelegateEntriesResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskDelegateEntriesResult",
			...params,
			value: [
				new asn1ts.Extension()
			]
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskSetEntriesReminderArgument {
	public constructor(that: AsnTaskSetEntriesReminderArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskSetEntriesReminderArgument {
		return new AsnTaskSetEntriesReminderArgument({
			u8slistTaskIDs: new ENetUC_Common.UTF8StringList(),
			bReminderActive: false,
			stReminderTime: new Date()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8slistTaskIDs",
			"bReminderActive",
			"stReminderTime"
		];
		return p;
	}

	public static type = "AsnTaskSetEntriesReminderArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskSetEntriesReminderArgument",
			...params,
			value: [
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8slistTaskIDs" }),
				new asn1ts.Boolean({ name: "bReminderActive" }),
				new asn1ts.Real({ name: "stReminderTime" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Liste der TaskIDs, deren Bearbeiter gesetzt werden sollen */
	public u8slistTaskIDs!: ENetUC_Common.UTF8StringList;
	/** Reminder will appear if true */
	public bReminderActive!: boolean;
	/** Date and Time for Reminder */
	public stReminderTime!: Date;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskSetEntriesReminderResult {
	public constructor(that?: AsnTaskSetEntriesReminderResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskSetEntriesReminderResult {
		return new AsnTaskSetEntriesReminderResult();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		return p;
	}

	public static type = "AsnTaskSetEntriesReminderResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskSetEntriesReminderResult",
			...params,
			value: [
				new asn1ts.Extension()
			]
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskItemsRemovedArgument {
	public constructor(that: AsnTaskItemsRemovedArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskItemsRemovedArgument {
		return new AsnTaskItemsRemovedArgument({
			u8slistTaskIDs: new ENetUC_Common.UTF8StringList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8slistTaskIDs"
		];
		return p;
	}

	public static type = "AsnTaskItemsRemovedArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskItemsRemovedArgument",
			...params,
			value: [
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8slistTaskIDs" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Die IDs der gelöschten Tasks */
	public u8slistTaskIDs!: ENetUC_Common.UTF8StringList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTasksReloadArgument {
	public constructor(that?: AsnTasksReloadArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTasksReloadArgument {
		return new AsnTasksReloadArgument();
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p: string[] = [];
		return p;
	}

	public static type = "AsnTasksReloadArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTasksReloadArgument",
			...params,
			value: [
				new asn1ts.Extension()
			]
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnNetDatabaseTask {
	public constructor(that: AsnNetDatabaseTask) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnNetDatabaseTask {
		return new AsnNetDatabaseTask({
			u8sTaskID: "",
			u8sSubject: "",
			contactData: ENetUC_Common.AsnNetDatabaseContact["initEmpty"].call(0),
			u8sCallNumber: "",
			projectPinRule: ENetUC_Common_SIPCTI.AsnProjectPinRule["initEmpty"].call(0),
			stUTCStartDate: new Date(),
			stUTCDueDate: new Date(),
			eState: AsnTaskState.notstarted,
			ePriority: AsnTaskPriority.low,
			eDelegationState: AsnTaskDelegationState.accepted,
			bReminderActive: false,
			stUTCReminderTime: new Date(),
			u8sReminderFile: "",
			u8sListOwners: new ENetUC_Common.UTF8StringList(),
			u8sCreator: "",
			stUTCCreationTime: new Date(),
			u8sBody: "",
			stUTCDateCompleted: new Date(),
			u8sCompletedFrom: "",
			ePrivacy: AsnTaskPrivacy.normal
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sTaskID",
			"u8sSubject",
			"contactData",
			"u8sCallNumber",
			"projectPinRule",
			"stUTCStartDate",
			"stUTCDueDate",
			"eState",
			"ePriority",
			"eDelegationState",
			"bReminderActive",
			"stUTCReminderTime",
			"u8sReminderFile",
			"u8sListOwners",
			"u8sCreator",
			"stUTCCreationTime",
			"u8sBody",
			"stUTCDateCompleted",
			"u8sCompletedFrom",
			"ePrivacy"
		];
		if (bIncludeOptionals)
			p.push("optionalParams");
		return p;
	}

	public static type = "AsnNetDatabaseTask";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnNetDatabaseTask",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sTaskID" }),
				new asn1ts.Utf8String({ name: "u8sSubject" }),
				ENetUC_Common.AsnNetDatabaseContact.getASN1Schema({ name: "contactData" }),
				new asn1ts.Utf8String({ name: "u8sCallNumber" }),
				ENetUC_Common_SIPCTI.AsnProjectPinRule.getASN1Schema({ name: "projectPinRule" }),
				new asn1ts.Real({ name: "stUTCStartDate" }),
				new asn1ts.Real({ name: "stUTCDueDate" }),
				new asn1ts.Enumerated({ name: "eState" }),
				new asn1ts.Enumerated({ name: "ePriority" }),
				new asn1ts.Enumerated({ name: "eDelegationState" }),
				new asn1ts.Boolean({ name: "bReminderActive" }),
				new asn1ts.Real({ name: "stUTCReminderTime" }),
				new asn1ts.Utf8String({ name: "u8sReminderFile" }),
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8sListOwners" }),
				new asn1ts.Utf8String({ name: "u8sCreator" }),
				new asn1ts.Real({ name: "stUTCCreationTime" }),
				new asn1ts.Utf8String({ name: "u8sBody" }),
				new asn1ts.Real({ name: "stUTCDateCompleted" }),
				new asn1ts.Utf8String({ name: "u8sCompletedFrom" }),
				new asn1ts.Enumerated({ name: "ePrivacy" }),
				ENetUC_Common.AsnOptionalParameters.getASN1Schema({ name: "optionalParams", idBlock: { optionalID: 0 } }),
				new asn1ts.Extension()
			]
		});
	}

	/** ID of the Taskentry */
	public u8sTaskID!: string;
	/** Subject of the Task */
	public u8sSubject!: string;
	/** NetDatabaseContact Information of the Contact to call */
	public contactData!: ENetUC_Common.AsnNetDatabaseContact;
	/** Number to call */
	public u8sCallNumber!: string;
	/** Projekt informationen */
	public projectPinRule!: ENetUC_Common_SIPCTI.AsnProjectPinRule;
	/** Starttime of the Task */
	public stUTCStartDate!: Date;
	/** Deadline for the Task */
	public stUTCDueDate!: Date;
	/** State of the Task */
	public eState!: AsnTaskState;
	/** Priority of the Task */
	public ePriority!: AsnTaskPriority;
	/** State of the Delegation (if needed) */
	public eDelegationState!: AsnTaskDelegationState;
	/** Reminder will appear if true */
	public bReminderActive!: boolean;
	/** Date and Time for Reminder */
	public stUTCReminderTime!: Date;
	/** Soundfilename for Reminder */
	public u8sReminderFile!: string;
	/** Name(s) of responsible Contact(s) */
	public u8sListOwners!: ENetUC_Common.UTF8StringList;
	/** Creator of the Task */
	public u8sCreator!: string;
	/** Creation Timestamp of the Task */
	public stUTCCreationTime!: Date;
	/** Bodytext of the Task */
	public u8sBody!: string;
	/** Timestamp for State \"Done\" */
	public stUTCDateCompleted!: Date;
	/** Contact who finished the Task */
	public u8sCompletedFrom!: string;
	/** Privacy Level of the Task */
	public ePrivacy!: AsnTaskPrivacy;
	/** optionalParams Name \"OwnersWhoDeletedTheTask\" Value String */
	public optionalParams?: ENetUC_Common.AsnOptionalParameters;
}

// [PrintTSTypeDefCode]
// [PrintTSSetOfDefCode]
// [PrintTSListClass]
export class AsnNetDatabaseTaskList extends Array<AsnNetDatabaseTask> {
	public static getASN1Schema(params?: asn1ts.SequenceOfParams): asn1ts.SequenceOf {
		return new asn1ts.SequenceOf({
			...params,
			value: AsnNetDatabaseTask.getASN1Schema()
		});
	}
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Result of the asnTaskGetEntries and asnTaskGetEntriesV2 operation
 */
export class AsnTaskGetEntriesResult {
	public constructor(that: AsnTaskGetEntriesResult) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskGetEntriesResult {
		return new AsnTaskGetEntriesResult({
			listTasks: new AsnNetDatabaseTaskList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"listTasks"
		];
		return p;
	}

	public static type = "AsnTaskGetEntriesResult";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskGetEntriesResult",
			...params,
			value: [
				AsnNetDatabaseTaskList.getASN1Schema({ name: "listTasks" }),
				new asn1ts.Extension()
			]
		});
	}

	public listTasks!: AsnNetDatabaseTaskList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskGetEntriesV2Argument {
	public constructor(that: AsnTaskGetEntriesV2Argument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskGetEntriesV2Argument {
		return new AsnTaskGetEntriesV2Argument({
			findOptions: AsnNetDatabaseTaskFindOptionsV2["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"findOptions"
		];
		return p;
	}

	public static type = "AsnTaskGetEntriesV2Argument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskGetEntriesV2Argument",
			...params,
			value: [
				AsnNetDatabaseTaskFindOptionsV2.getASN1Schema({ name: "findOptions" }),
				new asn1ts.Extension()
			]
		});
	}

	public findOptions!: AsnNetDatabaseTaskFindOptionsV2;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskGetEntryCountArgument {
	public constructor(that: AsnTaskGetEntryCountArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskGetEntryCountArgument {
		return new AsnTaskGetEntryCountArgument({
			findOptions: AsnNetDatabaseTaskFindOptionsV2["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"findOptions"
		];
		return p;
	}

	public static type = "AsnTaskGetEntryCountArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskGetEntryCountArgument",
			...params,
			value: [
				AsnNetDatabaseTaskFindOptionsV2.getASN1Schema({ name: "findOptions" }),
				new asn1ts.Extension()
			]
		});
	}

	public findOptions!: AsnNetDatabaseTaskFindOptionsV2;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskAddEntryArgument {
	public constructor(that: AsnTaskAddEntryArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskAddEntryArgument {
		return new AsnTaskAddEntryArgument({
			taskEntry: AsnNetDatabaseTask["initEmpty"].call(0)
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"taskEntry"
		];
		return p;
	}

	public static type = "AsnTaskAddEntryArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskAddEntryArgument",
			...params,
			value: [
				AsnNetDatabaseTask.getASN1Schema({ name: "taskEntry" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Eintrag der der Datenbank hinzugefügt werden soll */
	public taskEntry!: AsnNetDatabaseTask;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskModifyEntriesArgument {
	public constructor(that: AsnTaskModifyEntriesArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskModifyEntriesArgument {
		return new AsnTaskModifyEntriesArgument({
			listTasks: new AsnNetDatabaseTaskList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"listTasks"
		];
		return p;
	}

	public static type = "AsnTaskModifyEntriesArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskModifyEntriesArgument",
			...params,
			value: [
				AsnNetDatabaseTaskList.getASN1Schema({ name: "listTasks" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Liste der Tasks die geändert werden sollen */
	public listTasks!: AsnNetDatabaseTaskList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskSetEntriesStateArgument {
	public constructor(that: AsnTaskSetEntriesStateArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskSetEntriesStateArgument {
		return new AsnTaskSetEntriesStateArgument({
			eState: AsnTaskState.notstarted,
			u8slistTaskIDs: new ENetUC_Common.UTF8StringList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"eState",
			"u8slistTaskIDs"
		];
		return p;
	}

	public static type = "AsnTaskSetEntriesStateArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskSetEntriesStateArgument",
			...params,
			value: [
				new asn1ts.Enumerated({ name: "eState" }),
				ENetUC_Common.UTF8StringList.getASN1Schema({ name: "u8slistTaskIDs" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Status auf den die Taskentries gesetzt werden sollen */
	public eState!: AsnTaskState;
	/** Liste der TaskIDs, deren Tasks auf erledigt gesetzt werden sollen */
	public u8slistTaskIDs!: ENetUC_Common.UTF8StringList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskItemsModifiedArgument {
	public constructor(that: AsnTaskItemsModifiedArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskItemsModifiedArgument {
		return new AsnTaskItemsModifiedArgument({
			listTasks: new AsnNetDatabaseTaskList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"listTasks"
		];
		return p;
	}

	public static type = "AsnTaskItemsModifiedArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskItemsModifiedArgument",
			...params,
			value: [
				AsnNetDatabaseTaskList.getASN1Schema({ name: "listTasks" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Die Modifizierten Tasks */
	public listTasks!: AsnNetDatabaseTaskList;
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
export class AsnTaskItemsAddedArgument {
	public constructor(that: AsnTaskItemsAddedArgument) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnTaskItemsAddedArgument {
		return new AsnTaskItemsAddedArgument({
			listTasks: new AsnNetDatabaseTaskList()
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"listTasks"
		];
		return p;
	}

	public static type = "AsnTaskItemsAddedArgument";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnTaskItemsAddedArgument",
			...params,
			value: [
				AsnNetDatabaseTaskList.getASN1Schema({ name: "listTasks" }),
				new asn1ts.Extension()
			]
		});
	}

	/** Die hinzugefügten Tasks */
	public listTasks!: AsnNetDatabaseTaskList;
}
