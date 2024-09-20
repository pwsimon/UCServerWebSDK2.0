// [PrintTSROSEInterfaceCode]
// [PrintTSROSEHeader]
/**
 * ENetROSEInterfaceROSE_Interface
 * "UC-Server-Access-Protocol-Main" ASN.1 interfaces.
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
import * as ENetROSEInterface from "./ENetROSEInterface";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_SIPCTI from "./ENetUC_Common_SIPCTI";
import * as ENetUC_Common_AsnContact from "./ENetUC_Common_AsnContact";
import * as ENetUC_Common_Appointments from "./ENetUC_Common_Appointments";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetROSEInterfaceROSEInterface";
export const MODULE_LASTCHANGE = "2024-08-22T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 20240822;
export const MODULE_VERSION = "8.0.20240822";

// [PrintTSROSEInterface]
export interface IENetROSEInterfaceROSE {
	event_asnKeepAlive(argument: ENetROSEInterface.AsnKeepAliveArgument, invokeContext?: ISendInvokeContextParams): void;
	invoke_asnGetLocationInformation2(argument: ENetROSEInterface.AsnGetLocationInformationArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnGetLocationInformation2Result | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnSetLocationInformation2(argument: ENetROSEInterface.AsnSetLocationInformation2Argument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnSetLocationInformation2Result | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnGetLocationIDs(argument: ENetROSEInterface.AsnGetLocationIDsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnGetLocationIDsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	event_asnLocationInformationChanged(argument: ENetROSEInterface.AsnLocationInformationChangedArgument, invokeContext?: ISendInvokeContextParams): void;
	event_asnUpdateMyContactConfigurationV2(argument: ENetROSEInterface.AsnUpdateMyContactConfigurationV2Argument, invokeContext?: ISendInvokeContextParams): void;
	invoke_asnSetUserAbsentState(argument: ENetROSEInterface.AsnSetUserAbsentStateArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnSetUserAbsentStateResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnGetUserAbsentState(argument: ENetROSEInterface.AsnGetUserAbsentStateArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnGetUserAbsentStateResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnResetUserAbsentState(argument: ENetROSEInterface.AsnResetUserAbsentStateArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnResetUserAbsentStateResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	event_asnUpdateMyAbsentStateV2(argument: ENetROSEInterface.AsnUpdateMyAbsentStateV2Argument, invokeContext?: ISendInvokeContextParams): void;
	invoke_asnCustomNoteSet(argument: ENetROSEInterface.AsnCustomNoteSetArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnCustomNoteSetResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	event_asnUpdateMyCustomNote(argument: ENetROSEInterface.AsnUpdateMyCustomNoteArgument, invokeContext?: ISendInvokeContextParams): void;
	invoke_asnGetMetaSettings(argument: ENetROSEInterface.AsnGetMetaSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnGetMetaSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnGetMetaPhoneBooksSettings(argument: ENetROSEInterface.AsnGetMetaSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnGetMetaSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnSetMetaSettings(argument: ENetROSEInterface.AsnSetMetaSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnSetMetaSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnSetMetaPhoneBooksSettings(argument: ENetROSEInterface.AsnSetMetaSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnSetMetaSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnSubscribeServices(argument: ENetROSEInterface.AsnSubscribeServicesArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetROSEInterface.AsnSubscribeServicesResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
}

// [PrintTSROSEHandlerInterface]
// Contains all invokes of the interface (normally the server side)
export interface IENetROSEInterfaceROSE_Invoke_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onInvoke_asnGetLocationInformation2(argument: ENetROSEInterface.AsnGetLocationInformationArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetLocationInformation2Result | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnSetLocationInformation2(argument: ENetROSEInterface.AsnSetLocationInformation2Argument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetLocationInformation2Result | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnGetLocationIDs(argument: ENetROSEInterface.AsnGetLocationIDsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetLocationIDsResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnSetUserAbsentState(argument: ENetROSEInterface.AsnSetUserAbsentStateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetUserAbsentStateResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnGetUserAbsentState(argument: ENetROSEInterface.AsnGetUserAbsentStateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetUserAbsentStateResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnResetUserAbsentState(argument: ENetROSEInterface.AsnResetUserAbsentStateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnResetUserAbsentStateResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnCustomNoteSet(argument: ENetROSEInterface.AsnCustomNoteSetArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnCustomNoteSetResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnGetMetaSettings(argument: ENetROSEInterface.AsnGetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnGetMetaPhoneBooksSettings(argument: ENetROSEInterface.AsnGetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnSetMetaSettings(argument: ENetROSEInterface.AsnSetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnSetMetaPhoneBooksSettings(argument: ENetROSEInterface.AsnSetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnSubscribeServices(argument: ENetROSEInterface.AsnSubscribeServicesArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSubscribeServicesResult | ENetUC_Common.AsnRequestError | undefined>;
}

// Contains all events of the interface (normally the client side)
export interface IENetROSEInterfaceROSE_Event_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnKeepAlive(argument: ENetROSEInterface.AsnKeepAliveArgument, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnLocationInformationChanged(argument: ENetROSEInterface.AsnLocationInformationChangedArgument, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnUpdateMyContactConfigurationV2(argument: ENetROSEInterface.AsnUpdateMyContactConfigurationV2Argument, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnUpdateMyAbsentStateV2(argument: ENetROSEInterface.AsnUpdateMyAbsentStateV2Argument, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnUpdateMyCustomNote(argument: ENetROSEInterface.AsnUpdateMyCustomNoteArgument, invokeContext: IReceiveInvokeContext): void;
}

// Contains all invokes and events of the interface
export type IENetROSEInterfaceROSE_Handler = IENetROSEInterfaceROSE_Invoke_Handler & IENetROSEInterfaceROSE_Event_Handler;

// [PrintTSROSEServerCopyPasteInterface]
/* Copy paste code for the import statement
import { IReceiveInvokeContext } from "./TSROSEBase";
import * as ENetUC_Common from "./ENetUC_Common";
import { ENetROSEInterface } from "./ENetROSEInterface";
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
 * Get a specific location information (AsnLocationInformation2).
 *
 * This function is replaces asnGetLocationInformation and delivers the new AsnLocationInformation2 for the given location id.
 *
 * @param argument - Argument for asnGetLocationInformation and asnGetLocationInformation2.
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetLocationInformation2Result on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetLocationInformation2(argument: ENetROSEInterface.AsnGetLocationInformationArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetLocationInformation2Result | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnSetLocationInformation2Result on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnSetLocationInformation2(argument: ENetROSEInterface.AsnSetLocationInformation2Argument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetLocationInformation2Result | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetLocationIDsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetLocationIDs(argument: ENetROSEInterface.AsnGetLocationIDsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetLocationIDsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Operation to set the manual presence state of a user.
 *
 * This operation is used to set the manual presence state of a user. This ist mostly used for the logged in contact, but can be used to set it for others user too.
 * In order to do that, access rights have to be granted by the other contact to the current user of the calling client.
 *
 * If the operation was successful, AsnAbsentStateSetUserResult is returned.
 *
 * If an error occured, AsnRequestError is returned.
 *
 * @param argument - Argument for asnSetUserAbsentState
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnSetUserAbsentStateResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnSetUserAbsentState(argument: ENetROSEInterface.AsnSetUserAbsentStateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetUserAbsentStateResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetUserAbsentStateResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetUserAbsentState(argument: ENetROSEInterface.AsnGetUserAbsentStateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetUserAbsentStateResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * This operation set the manual presence state of a user back, so the system calculated presence will not be affected by it.
 *
 * The manual presence of a user is a special input to the presence system.
 * To set it back to the pure system calculated presence this operation has to be called.
 *
 * If the operation was successful, AsnAbsentStateResetResult is returned.
 *
 * If the operation fails, AsnRequestError is returned.
 *
 * @param argument - Argument for asnResetUserAbsentState
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnResetUserAbsentStateResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnResetUserAbsentState(argument: ENetROSEInterface.AsnResetUserAbsentStateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnResetUserAbsentStateResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnCustomNoteSetResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnCustomNoteSet(argument: ENetROSEInterface.AsnCustomNoteSetArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnCustomNoteSetResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetMetaSettingsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetMetaSettings(argument: ENetROSEInterface.AsnGetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetMetaSettingsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetMetaPhoneBooksSettings(argument: ENetROSEInterface.AsnGetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnGetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnSetMetaSettingsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnSetMetaSettings(argument: ENetROSEInterface.AsnSetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnSetMetaSettingsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnSetMetaPhoneBooksSettings(argument: ENetROSEInterface.AsnSetMetaSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSetMetaSettingsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * This is an temporary function we use to separate Login from the implicit logic the server is doing with the login
 * This function exists while we rework the interface from asnLogon to asnLoginV2
 * In the future every service will have it´s own login function telling the server that a client is interested in that service
 * Please be aware that we will remove this function any time as it is just a temporary solution to decouple login from subscribing to services
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnSubscribeServicesResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnSubscribeServices(argument: ENetROSEInterface.AsnSubscribeServicesArgument, invokeContext: IReceiveInvokeContext): Promise<ENetROSEInterface.AsnSubscribeServicesResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Event which can be send to the UCServer regularily to detect connection loss faster.
 *
 * @param argument - Argunment for asnKeepAlive.
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnKeepAlive(argument: ENetROSEInterface.AsnKeepAliveArgument, invokeContext: IReceiveInvokeContext): void {
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnLocationInformationChanged(argument: ENetROSEInterface.AsnLocationInformationChangedArgument, invokeContext: IReceiveInvokeContext): void {
}
*/

/**
 * Event that my contact configuration has changed
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnUpdateMyContactConfigurationV2(argument: ENetROSEInterface.AsnUpdateMyContactConfigurationV2Argument, invokeContext: IReceiveInvokeContext): void {
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnUpdateMyAbsentStateV2(argument: ENetROSEInterface.AsnUpdateMyAbsentStateV2Argument, invokeContext: IReceiveInvokeContext): void {
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnUpdateMyCustomNote(argument: ENetROSEInterface.AsnUpdateMyCustomNoteArgument, invokeContext: IReceiveInvokeContext): void {
}
*/
