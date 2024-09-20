// [PrintTSROSEInterfaceCode]
// [PrintTSROSEHeader]
/**
 * ENetUC_AppointmentsROSE_Interface
 * "UC-Server-Access-Protocol-Appointments" ASN.1 interfaces.
 * This file was generated by estos esnacc (V6.0.19, 20.09.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
// [PrintTSROSEImport]
import { IReceiveInvokeContext, AsnInvokeProblem } from "./TSROSEBase";
import { ISendInvokeContextParams } from "./TSInvokeContext";
// Local imports
import * as ENetUC_Appointments from "./ENetUC_Appointments";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_Appointments from "./ENetUC_Common_Appointments";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_AppointmentsROSEInterface";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSROSEInterface]
export interface IENetUC_AppointmentsROSE {
	invoke_asnAppointmentSetEntryList(argument: ENetUC_Appointments.AsnAppointmentSetEntryListArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Appointments.AsnAppointmentSetEntryListResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnAppointmentSetSeriesEntriesList(argument: ENetUC_Appointments.AsnAppointmentSetSeriesEntriesListArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Appointments.AsnAppointmentSetSeriesEntriesListResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnAppointmentRemoveEntry(argument: ENetUC_Appointments.AsnAppointmentRemoveEntryArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Appointments.AsnAppointmentRemoveEntryResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnAppointmentSetEntry(argument: ENetUC_Appointments.AsnAppointmentSetEntryArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Appointments.AsnAppointmentSetEntryResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnAppointmentGetAllEntriesForUser(argument: ENetUC_Appointments.AsnAppointmentGetAllEntriesForUserArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Appointments.AsnAppointmentGetAllEntriesForUserResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnAppointmentGetActualEntrysForUser(argument: ENetUC_Appointments.AsnAppointmentGetActualEntryForUserArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Appointments.AsnAppointmentGetActualEntryForUserResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
}

// [PrintTSROSEHandlerInterface]
// Contains all invokes of the interface (normally the server side)
export interface IENetUC_AppointmentsROSE_Invoke_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onInvoke_asnAppointmentSetEntryList(argument: ENetUC_Appointments.AsnAppointmentSetEntryListArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentSetEntryListResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnAppointmentSetSeriesEntriesList(argument: ENetUC_Appointments.AsnAppointmentSetSeriesEntriesListArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentSetSeriesEntriesListResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnAppointmentRemoveEntry(argument: ENetUC_Appointments.AsnAppointmentRemoveEntryArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentRemoveEntryResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnAppointmentSetEntry(argument: ENetUC_Appointments.AsnAppointmentSetEntryArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentSetEntryResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnAppointmentGetAllEntriesForUser(argument: ENetUC_Appointments.AsnAppointmentGetAllEntriesForUserArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentGetAllEntriesForUserResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnAppointmentGetActualEntrysForUser(argument: ENetUC_Appointments.AsnAppointmentGetActualEntryForUserArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentGetActualEntryForUserResult | ENetUC_Common.AsnRequestError | undefined>;
}

// Contains all events of the interface (normally the client side)
export interface IENetUC_AppointmentsROSE_Event_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
}

// Contains all invokes and events of the interface
export type IENetUC_AppointmentsROSE_Handler = IENetUC_AppointmentsROSE_Invoke_Handler & IENetUC_AppointmentsROSE_Event_Handler;

// [PrintTSROSEServerCopyPasteInterface]
/* Copy paste code for the import statement
import { IReceiveInvokeContext } from "./TSROSEBase";
import * as ENetUC_Common from "./ENetUC_Common";
import { ENetUC_Appointments } from "./ENetUC_Appointments";
*/

/**
 * Allows to set the log context for an invoke.
 * This method is called in advanced of methods handled inside this handler
 * The idea is to implement a async local storage based on the provided data from the argument or invokeContext
 *
 * @param argument - the snacc rose argument
 * @param invokeContext - the invoke context
 */
/*
public setLogContext(argument: unknown, invokeContext: IReceiveInvokeContext): void {
}
*/

/**
 * Send list of appointments of a user to the server
 *
 * Send a complete list of appointments to the server. This will replace the whole list currently on the server.
 * Currently the clients should only send a timeframe of the next 30 days to the server for reducing resource consumption.
 *
 * - Anyonymous access: no
 * - Admin access for other users: yes (e.g. EWS Calendar Replicator)
 * - User access for other users: no (server will ignore given u8sOwner)
 * - User access: yes (u8sOwner not neccessary)
 *
 * @param argument - Argument for asnAppointmentSetEntryList
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnAppointmentSetEntryListResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnAppointmentSetEntryList(argument: ENetUC_Appointments.AsnAppointmentSetEntryListArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentSetEntryListResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Send a complete list of recurrent appointments to the server.
 *
 * Send a complete list of recurrent appointments to the server. Each entry must have the same entryID.
 *
 * @param argument - Argument for asnAppointmentSetSeriesEntriesList.
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnAppointmentSetSeriesEntriesListResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnAppointmentSetSeriesEntriesList(argument: ENetUC_Appointments.AsnAppointmentSetSeriesEntriesListArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentSetSeriesEntriesListResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Removes an Entry from the Server.
 *
 * With this operation the caller can remove an entry from the appointment database identified by its u8sEntryID.
 *
 * @param argument - Argument for asnAppointmentRemoveEntry.
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnAppointmentRemoveEntryResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnAppointmentRemoveEntry(argument: ENetUC_Appointments.AsnAppointmentRemoveEntryArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentRemoveEntryResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Send one Entry to the Server.
 *
 * Send one appointment entry to the UCServer for storing it into the appointment database.
 *
 * @param argument - Argument for asnAppointmentSetEntry.
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnAppointmentSetEntryResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnAppointmentSetEntry(argument: ENetUC_Appointments.AsnAppointmentSetEntryArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentSetEntryResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Retrieve all appointments of the user.
 *
 * With this operation the client can get all known appointmentzs of the logged in user from the appointment database of the UCServer.
 *
 * @param argument - Argument for asnAppointmentGetAllEntriesForUser.
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnAppointmentGetAllEntriesForUserResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnAppointmentGetAllEntriesForUser(argument: ENetUC_Appointments.AsnAppointmentGetAllEntriesForUserArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentGetAllEntriesForUserResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Read the currently active Entry from the Server (scope: current Usersession).
 *
 * @param argument - Argument for asnAppointmentGetActualEntrysForUser
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnAppointmentGetActualEntryForUserResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnAppointmentGetActualEntrysForUser(argument: ENetUC_Appointments.AsnAppointmentGetActualEntryForUserArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Appointments.AsnAppointmentGetActualEntryForUserResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/
