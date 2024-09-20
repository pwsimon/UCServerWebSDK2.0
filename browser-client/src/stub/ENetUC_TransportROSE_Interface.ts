// [PrintTSROSEInterfaceCode]
// [PrintTSROSEHeader]
/**
 * ENetUC_TransportROSE_Interface
 * "UC-Server-Access-Protocol-Transport" ASN.1 interfaces.
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
import * as ENetUC_Transport from "./ENetUC_Transport";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Auth from "./ENetUC_Auth";
import * as ENetUC_Common_Auth from "./ENetUC_Common_Auth";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_TransportROSEInterface";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSROSEInterface]
export interface IENetUC_TransportROSE {
	invoke_asnStartTLS(argument: ENetUC_Transport.AsnStartTLSArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Transport.AsnStartTLSResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	event_asnTransportKeepAlive(argument: ENetUC_Transport.AsnTransportKeepAliveArgument, invokeContext?: ISendInvokeContextParams): void;
	invoke_asnTokenVerifyV2(argument: ENetUC_Transport.AsnTokenVerifyV2Argument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Transport.AsnTokenVerifyResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnCheckConnection(argument: ENetUC_Transport.AsnCheckConnectionArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Transport.AsnCheckConnectionResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnCreateAuthToken(argument: ENetUC_Transport.AsnCreateAuthTokenArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_Transport.AsnCreateAuthTokenResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
}

// [PrintTSROSEHandlerInterface]
// Contains all invokes of the interface (normally the server side)
export interface IENetUC_TransportROSE_Invoke_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onInvoke_asnStartTLS(argument: ENetUC_Transport.AsnStartTLSArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnStartTLSResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnTokenVerifyV2(argument: ENetUC_Transport.AsnTokenVerifyV2Argument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnTokenVerifyResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnCheckConnection(argument: ENetUC_Transport.AsnCheckConnectionArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnCheckConnectionResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnCreateAuthToken(argument: ENetUC_Transport.AsnCreateAuthTokenArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnCreateAuthTokenResult | ENetUC_Common.AsnRequestError | undefined>;
}

// Contains all events of the interface (normally the client side)
export interface IENetUC_TransportROSE_Event_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnTransportKeepAlive(argument: ENetUC_Transport.AsnTransportKeepAliveArgument, invokeContext: IReceiveInvokeContext): void;
}

// Contains all invokes and events of the interface
export type IENetUC_TransportROSE_Handler = IENetUC_TransportROSE_Invoke_Handler & IENetUC_TransportROSE_Event_Handler;

// [PrintTSROSEServerCopyPasteInterface]
/* Copy paste code for the import statement
import { IReceiveInvokeContext } from "./TSROSEBase";
import * as ENetUC_Common from "./ENetUC_Common";
import { ENetUC_Transport } from "./ENetUC_Transport";
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
 * Start TLS Handschake on existing connection
 *
 * Client should use this function immediately after establishing the connection.
 * After calling this function, the UCServer switches to TLS mode and expects a regular TLS handshahe from the client.
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnStartTLSResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnStartTLS(argument: ENetUC_Transport.AsnStartTLSArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnStartTLSResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * This function allows an external Server to check if a User token is valid
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnTokenVerifyResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnTokenVerifyV2(argument: ENetUC_Transport.AsnTokenVerifyV2Argument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnTokenVerifyResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * This function allows to check if the connection to the server is functional (Mobiler Zugang überprüfung)
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnCheckConnectionResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnCheckConnection(argument: ENetUC_Transport.AsnCheckConnectionArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnCheckConnectionResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Create a auth token in the UCServer
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnCreateAuthTokenResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnCreateAuthToken(argument: ENetUC_Transport.AsnCreateAuthTokenArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_Transport.AsnCreateAuthTokenResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * -
 *
 * @param argument -
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnTransportKeepAlive(argument: ENetUC_Transport.AsnTransportKeepAliveArgument, invokeContext: IReceiveInvokeContext): void {
}
*/
