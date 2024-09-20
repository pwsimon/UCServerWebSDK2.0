// [PrintTSCodeOne]
// [PrintTSComments]
/*
 * ENetUC_Common_Appointments.ts
 * "UC-Server-Access-Protocol-AppointmentsCommon" ASN.1 stubs.
 * This file was generated by estos esnacc (V6.0.19, 20.09.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
/**
 * Common interface definitions
 * ## Module description
 * This module contains structures that are mainly used in combination with the Appointments
 * There should not be any function\/operation defintions in this module.
 *
 * THERE SHOULD NOT BE ANY FUNCTION\/OPERATION DEFINTIONS IN THIS MODULE.
 */
// [PrintTSImports]
import * as asn1ts from "@estos/asn1ts";
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_Common_Appointments";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum EnumAppointmentState {
	eAPPOINTMENTSTATUSFREE = 0,
	eAPPOINTMENTSTATUSTENTATIVE = 1,
	eAPPOINTMENTSTATUSBUSY = 2,
	eAPPOINTMENTSTATUSOUTOFOFFICE = 3
}

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum EnumAppointmentImportance {
	eAPPOINTMENTIMPORTANCELESS = 0,
	eAPPOINTMENTIMPORTANCENORMAL = 1,
	eAPPOINTMENTIMPORTANCEURGENT = 2
}

// [PrintTSTypeDefCode]
// [PrintTSEnumDefCode]
export enum EnumAppointmentSensitivity {
	eAPPOINTMENTSENSITIVITYNORMAL = 0,
	eAPPOINTMENTSENSITIVITYPERSONAL = 1,
	eAPPOINTMENTSENSITIVITYPRIVATE = 2,
	eAPPOINTMENTSENSITIVITYCONFIDENTIAL = 3
}

// [PrintTSTypeDefCode]
// [PrintTSSeqDefCode]
/**
 * Datatype for transport of Appointment Data to and from the UCServer.
 */
export class AsnAppointmentEntry {
	public constructor(that: AsnAppointmentEntry) {
		Object.assign(this, that);
	}

	private static initEmpty(): AsnAppointmentEntry {
		return new AsnAppointmentEntry({
			u8sEntryID: "",
			u8sOwner: "",
			u8sDataSource: "",
			stStart: new Date(),
			stEnd: new Date(),
			iDuration: 0,
			u8sSubject: "",
			u8sText: "",
			bAllDay: false,
			iStatus: 0,
			u8sCategory: "",
			iImportance: 0,
			iSensitivity: 0,
			bIsValid: false
		});
	}

	public static getOwnPropertyNames(bIncludeOptionals: boolean = true): string[] {
		const p = [
			"u8sEntryID",
			"u8sOwner",
			"u8sDataSource",
			"stStart",
			"stEnd",
			"iDuration",
			"u8sSubject",
			"u8sText",
			"bAllDay",
			"iStatus",
			"u8sCategory",
			"iImportance",
			"iSensitivity",
			"bIsValid"
		];
		if (bIncludeOptionals)
			p.push("optionalParams");
		return p;
	}

	public static type = "AsnAppointmentEntry";

	public static getASN1Schema(params?: asn1ts.ConstructedParams): asn1ts.Sequence {
		return new asn1ts.Sequence({
			name: "AsnAppointmentEntry",
			...params,
			value: [
				new asn1ts.Utf8String({ name: "u8sEntryID" }),
				new asn1ts.Utf8String({ name: "u8sOwner" }),
				new asn1ts.Utf8String({ name: "u8sDataSource" }),
				new asn1ts.Real({ name: "stStart" }),
				new asn1ts.Real({ name: "stEnd" }),
				new asn1ts.Integer({ name: "iDuration" }),
				new asn1ts.Utf8String({ name: "u8sSubject" }),
				new asn1ts.Utf8String({ name: "u8sText" }),
				new asn1ts.Boolean({ name: "bAllDay" }),
				new asn1ts.Integer({ name: "iStatus" }),
				new asn1ts.Utf8String({ name: "u8sCategory" }),
				new asn1ts.Integer({ name: "iImportance" }),
				new asn1ts.Integer({ name: "iSensitivity" }),
				new asn1ts.Boolean({ name: "bIsValid" }),
				ENetUC_Common.AsnOptionalParameters.getASN1Schema({ name: "optionalParams", optional: true }),
				new asn1ts.Extension()
			]
		});
	}

	/** Unique EntryID of the data source */
	public u8sEntryID!: string;
	/** Owner of the dataset - will be changed by the ucserver with the loggedin user to enforce ownership for security reasons */
	public u8sOwner!: string;
	/** Symbolic name of the data source */
	public u8sDataSource!: string;
	/** Start time of the appointment */
	public stStart!: Date;
	/** End time of the appointment */
	public stEnd!: Date;
	/** Duration of the appointment */
	public iDuration!: number;
	/** Subject of the appointment */
	public u8sSubject!: string;
	/** Message body of the appointment */
	public u8sText!: string;
	/** Indicates, if it is an allday appointment (true) or not (false) */
	public bAllDay!: boolean;
	/** (Presence) State of the user while the appointment is active, see EnumAppointmentState */
	public iStatus!: number;
	/** Category of the appointment */
	public u8sCategory!: string;
	/** Importance of the appointment, see EnumAppointmentImportance */
	public iImportance!: number;
	/** Sensitivity (private or not), see EnumAppointmentSensitivity */
	public iSensitivity!: number;
	/** Is it a valid entry (data set), will be set on the ucserver (e.g. TabIndex of the database entry is not 0) */
	public bIsValid!: boolean;
	/** optionalParams Name \"Location\" Value String */
	public optionalParams?: ENetUC_Common.AsnOptionalParameters;
}

// [PrintTSTypeDefCode]
// [PrintTSSetOfDefCode]
// [PrintTSListClass]
export class SEQAppointmentList extends Array<AsnAppointmentEntry> {
	public static getASN1Schema(params?: asn1ts.SequenceOfParams): asn1ts.SequenceOf {
		return new asn1ts.SequenceOf({
			...params,
			value: AsnAppointmentEntry.getASN1Schema()
		});
	}
}
