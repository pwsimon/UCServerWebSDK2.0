// [PrintTSROSEInterfaceCode]
// [PrintTSROSEHeader]
/**
 * ENetUC_ClientPersistenceROSE_Interface
 * "UC-Server-Access-Protocol-ClientPersistence" ASN.1 interfaces.
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
import * as ENetUC_ClientPersistence from "./ENetUC_ClientPersistence";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_ClientPersistenceROSEInterface";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSROSEInterface]
export interface IENetUC_ClientPersistenceROSE {
	invoke_asnClientPersistenceCreate(argument: ENetUC_ClientPersistence.AsnClientPersistenceCreateArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientPersistence.AsnClientPersistenceCreateResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnClientPersistenceRead(argument: ENetUC_ClientPersistence.AsnClientPersistenceReadArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientPersistence.AsnClientPersistenceReadResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnClientPersistenceUpdate(argument: ENetUC_ClientPersistence.AsnClientPersistenceUpdateArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientPersistence.AsnClientPersistenceUpdateResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnClientPersistenceDelete(argument: ENetUC_ClientPersistence.AsnClientPersistenceDeleteArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientPersistence.AsnClientPersistenceDeleteResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnClientPersistenceSubscribe(argument: ENetUC_ClientPersistence.AsnClientPersistenceSubscribeArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientPersistence.AsnClientPersistenceSubscribeResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	event_asnClientPersistenceEvent(argument: ENetUC_ClientPersistence.AsnClientPersistenceEventArgument, invokeContext?: ISendInvokeContextParams): void;
	invoke_asnClientPersistenceGetDatabaseID(argument: ENetUC_ClientPersistence.AsnClientPersistenceGetDatabaseIDArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientPersistence.AsnClientPersistenceGetDatabaseIDResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
}

// [PrintTSROSEHandlerInterface]
// Contains all invokes of the interface (normally the server side)
export interface IENetUC_ClientPersistenceROSE_Invoke_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onInvoke_asnClientPersistenceCreate(argument: ENetUC_ClientPersistence.AsnClientPersistenceCreateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceCreateResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnClientPersistenceRead(argument: ENetUC_ClientPersistence.AsnClientPersistenceReadArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceReadResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnClientPersistenceUpdate(argument: ENetUC_ClientPersistence.AsnClientPersistenceUpdateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceUpdateResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnClientPersistenceDelete(argument: ENetUC_ClientPersistence.AsnClientPersistenceDeleteArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceDeleteResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnClientPersistenceSubscribe(argument: ENetUC_ClientPersistence.AsnClientPersistenceSubscribeArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceSubscribeResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnClientPersistenceGetDatabaseID(argument: ENetUC_ClientPersistence.AsnClientPersistenceGetDatabaseIDArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceGetDatabaseIDResult | ENetUC_Common.AsnRequestError | undefined>;
}

// Contains all events of the interface (normally the client side)
export interface IENetUC_ClientPersistenceROSE_Event_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onEvent_asnClientPersistenceEvent(argument: ENetUC_ClientPersistence.AsnClientPersistenceEventArgument, invokeContext: IReceiveInvokeContext): void;
}

// Contains all invokes and events of the interface
export type IENetUC_ClientPersistenceROSE_Handler = IENetUC_ClientPersistenceROSE_Invoke_Handler & IENetUC_ClientPersistenceROSE_Event_Handler;

// [PrintTSROSEServerCopyPasteInterface]
/* Copy paste code for the import statement
import { IReceiveInvokeContext } from "./TSROSEBase";
import * as ENetUC_Common from "./ENetUC_Common";
import { ENetUC_ClientPersistence } from "./ENetUC_ClientPersistence";
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
 * Adding a new item
 *
 * A new item is added to the ItemStore.
 * The client must be subscribed to this ItemStore and pass a unique (for the client session) u8sCrossRefID.
 * If the client does not provide a StoreID, the server generates a key itself.
 * Confirmation from the server is via the asnClientPersistenceEvent event with the corresponding u8sCrossRefID.
 * The configured access permissions are taken into account and acknowledged with an error if necessary.
 *
 * @param argument - Argument for asnClientPersistenceCreate
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnClientPersistenceCreateResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnClientPersistenceCreate(argument: ENetUC_ClientPersistence.AsnClientPersistenceCreateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceCreateResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Abruf von Elementen eines ItemStore
 *
 * The client retrieves one or more items from the passed ItemStore.
 * The client must be subscribed to this ItemStore and pass a unique (for the client session) u8sCrossRefID.
 * If the client does not provide a StoreID, all available items in the ItemStore will be returned.
 * The server's response is via the asnClientPersistenceEvent event with the corresponding u8sCrossRefID.
 * The configured access permissions are taken into account and acknowledged with an error if necessary.
 *
 * @param argument - Argument for asnClientPersistenceRead
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnClientPersistenceReadResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnClientPersistenceRead(argument: ENetUC_ClientPersistence.AsnClientPersistenceReadArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceReadResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Updating an existing element
 *
 * The client wants to update an existing item in the passed ItemStore.&lt;br \/&gt;
 * The client must be subscribed to this ItemStore and pass a unique (for the client session) u8sCrossRefID.
 * If the client does not provide a StoreID, all available items in the ItemStore will be returned.
 * The server's response is via the asnClientPersistenceEvent event with the corresponding u8sCrossRefID.
 * The configured access permissions are taken into account and acknowledged with an error if necessary.
 *
 * @param argument - Argument for asnClientPersistenceUpdate
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnClientPersistenceUpdateResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnClientPersistenceUpdate(argument: ENetUC_ClientPersistence.AsnClientPersistenceUpdateArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceUpdateResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Delete an existing item.
 *
 * The client wants to delete an existing item in the passed ItemStore.&lt;br \/&gt;
 * The client must be subscribed to this ItemStore and pass a unique (for the client session) u8sCrossRefID.
 * If the client does not provide a StoreID, all available items in the ItemStore will be returned.
 * The server's response is via the asnClientPersistenceEvent event with the corresponding u8sCrossRefID.
 * The configured access permissions are taken into account and acknowledged with an error if necessary.
 *
 * @param argument - Argument for asnClientPersistenceDelete
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnClientPersistenceDeleteResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnClientPersistenceDelete(argument: ENetUC_ClientPersistence.AsnClientPersistenceDeleteArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceDeleteResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Subscribe for changes in the item store.
 *
 * The client registers for event on changes of items within the passed ItemStore.&lt;br \/&gt;
 * Subscribe can be called multiple times and is additive in this case.
 * The client must pass a unique (for the client session) u8sCrossRefID.
 * The server's response is via the asnClientPersistenceEvent event with the corresponding u8sCrossRefID.
 * The configured access permissions are taken into account and acknowledged with an error if necessary.
 *
 * @param argument - Argument for asnClientPersistenceSubscribe
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnClientPersistenceSubscribeResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnClientPersistenceSubscribe(argument: ENetUC_ClientPersistence.AsnClientPersistenceSubscribeArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceSubscribeResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Abfrage der Datenbank ID
 *
 * Returns a unique ID of the database, which clients can use to determine whether the server is using a new database.&lt;br \/&gt;
 * This may be the case, for example, if the server database has been deleted.
 * This method is the only synchronous method of the client persistence interface.
 *
 * @param argument - Argument for asnClientPersistenceGetDatabaseID
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnClientPersistenceGetDatabaseIDResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnClientPersistenceGetDatabaseID(argument: ENetUC_ClientPersistence.AsnClientPersistenceGetDatabaseIDArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_ClientPersistence.AsnClientPersistenceGetDatabaseIDResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Event from the UCServer for signalling changes in an item store.
 *
 * The server responds via the asnClientPersistenceEvent with the corresponding u8sCrossRefID.&lt;br \/&gt;
 * The configured access permissions are taken into account and acknowledged with an error if necessary.
 * The server event is also delivered if the unique ID of the server database has changed.
 * The client should then discard its (locally cached) data and request new initial data from the server.
 *
 * @param argument - Argument for asnClientPersistenceEvent
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 */
/*
public onEvent_asnClientPersistenceEvent(argument: ENetUC_ClientPersistence.AsnClientPersistenceEventArgument, invokeContext: IReceiveInvokeContext): void {
}
*/
