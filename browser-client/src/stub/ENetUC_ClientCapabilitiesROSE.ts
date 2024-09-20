// [PrintTSROSEHeader]
/**
 * ENetUC_ClientCapabilitiesROSE
 * "UC-Server-Access-Protocol-ClientCapabilities" ASN.1 stubs.
 * This file was generated by estos esnacc (V6.0.19, 20.09.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
// [PrintTSROSEImports]
// Global imports
import { IENetUC_ClientCapabilitiesROSE, IENetUC_ClientCapabilitiesROSE_Handler } from "./ENetUC_ClientCapabilitiesROSE_Interface";
import { ROSEError, ROSEInvoke, ROSEReject, ROSEResult } from "./SNACCROSE";
import { AsnInvokeProblem, AsnInvokeProblemEnum, createInvokeReject, IASN1Transport, IASN1LogData, IReceiveInvokeContext, IInvokeHandler, ELogSeverity, ROSEBase } from "./TSROSEBase";
import { ISendInvokeContextParams } from "./TSInvokeContext";
// Local imports
import * as ENetUC_ClientCapabilities from "./ENetUC_ClientCapabilities";
import * as Converter from "./ENetUC_ClientCapabilities_Converter";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_Converter from "./ENetUC_Common_Converter";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_ClientCapabilitiesROSE";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSROSEOperationDefines]
export enum OperationIDs {
	OPID_asnSetClientCapabilitiesV2 = 3300,
	OPID_asnGetClientCapabilitiesV2 = 3301,
	OPID_asnClientCapabilitiesV2Changed = 3302
}

// [PrintTSROSEModuleComment]
/**
 * Data structures and methods to transport and notify client capabilities between clients and the server
 * Each client has certain capabilities he is able to handle. They are used to tell other clients the kind of interactions each client is able to process.
 * If a client wants to start an audio call to another client both clients have to be able to process audio (speakers and microphone present).
 * As soon as a client is capable to handle audio it tells the server and thus other clients that the client is now ready to process audio requests.
 * Beside well known capabilities clients may exchange customs capabilities. (e.g. client is capable for some sort of sharing and the appropriate sharing resource id)
 */

// [PrintTSROSEClass]
export class ENetUC_ClientCapabilitiesROSE extends ROSEBase implements IInvokeHandler, IENetUC_ClientCapabilitiesROSE {
	/**
	 * Contains the attributes that have to be filtered from logging
	 * Use logfilter property;property inside the asn1 root comments to specify this list
	 */
	public readonly logFilter: string[];

	/**
	 * The Loggers getLogData callback (used in all the log methods called in this class, add the classname to every log entry)
	 *
	 * @returns - an ILogData log data object provided additional data for all the logger calls in this class
	 */
	public getLogData(): IASN1LogData {
		return {
			className: MODULE_NAME
		};
	}

	/**
	 * Returns the operationName for an operationID
	 *
	 * @param id - the id we want to have the name for
	 * @returns - the name or undefined if not found
	 */
	public getNameForOperationID(id: OperationIDs): string | undefined {
		switch (id) {
			case OperationIDs.OPID_asnSetClientCapabilitiesV2:
				return "asnSetClientCapabilitiesV2";
			case OperationIDs.OPID_asnGetClientCapabilitiesV2:
				return "asnGetClientCapabilitiesV2";
			case OperationIDs.OPID_asnClientCapabilitiesV2Changed:
				return "asnClientCapabilitiesV2Changed";
			default:
				return undefined;
		}
	}

	/**
	 * Returns the operationID for an operationName
	 *
	 * @param name - the name we want to have the id for
	 * @returns - the id or undefined if not found
	 */
	public getIDForOperationName(name: string): OperationIDs | undefined {
		switch (name) {
			case "asnSetClientCapabilitiesV2":
				return OperationIDs.OPID_asnSetClientCapabilitiesV2;
			case "asnGetClientCapabilitiesV2":
				return OperationIDs.OPID_asnGetClientCapabilitiesV2;
			case "asnClientCapabilitiesV2Changed":
				return OperationIDs.OPID_asnClientCapabilitiesV2Changed;
			default:
				return undefined;
		}
	}

	// [PrintTSROSEConstructor]
	/**
	 * Constructs the invoke and oninvoke object targeting all the ROSE related parts.
	 *
	 * @param transport - The transport is the connection to the other side. It takes care of delivering the invoke
	 * to us as well as to send invokes and events to the other side. It also holds the logger.
	 * @param handleEvents - Set this to true if you want to receive events or false if the stub should cached them
	 * until you call dispatchEvents();
	 * @param handler - The handler takes care of handling methods that are exposed through the ASN1 file
	 * The outer ROSE envelop specifies the function that is called. The server looks for an appropriate handler
	 * and calls the handler for the operation. Inside the operation the argument is decoded. Once the handling of the
	 * operation is done the result (error) is encoded and handed back to the callee, embedded in the ROSE envelop and send
	 * back to the other side. If a certain function is not register the function call will fail with not function not implemented
	 */
	public constructor(transport: IASN1Transport, handleEvents: boolean, handler?: Partial<IENetUC_ClientCapabilitiesROSE_Handler>) {
		super(transport, handleEvents);

		this.logFilter = [];

		if (handler)
			this.setHandler(handler);
	}

	// [PrintTSROSESetHandler]
	/**
	 * Sets the handler and registers the operations with it
	 *
	 * @param handler - The handler takes care of handling methods that are exposed through the ASN1 file
	 * The outer ROSE envelop specifies the function that is called. The server looks for an appropriate handler
	 * and calls the handler for the operation. Inside the operation the argument is decoded. Once the handling of the
	 * operation is done the result (error) is encoded and handed back to the callee, embedded in the ROSE envelop and send
	 * back to the other side. If a certain function is not register the function call will fail with not function not implemented
	 */
	public setHandler(handler: Partial<IENetUC_ClientCapabilitiesROSE_Handler>): void {
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnSetClientCapabilitiesV2, "asnSetClientCapabilitiesV2");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnGetClientCapabilitiesV2, "asnGetClientCapabilitiesV2");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnClientCapabilitiesV2Changed, "asnClientCapabilitiesV2Changed");
		this.transport.registerModuleVersion("ENetUC_ClientCapabilities", 8, 0);
	}

	// [PrintTSROSEInvokeMethods]

	// [PrintTSROSEInvokeMethod]
	/**
	 * Event to send client capabilities to the server
	 *
	 * @param argument - An AsnSetClientCapabilitiesV2Argument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnSetClientCapabilitiesV2Result, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnSetClientCapabilitiesV2(argument: ENetUC_ClientCapabilities.AsnSetClientCapabilitiesV2Argument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientCapabilities.AsnSetClientCapabilitiesV2Result | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_ClientCapabilities.AsnSetClientCapabilitiesV2Result, OperationIDs.OPID_asnSetClientCapabilitiesV2, "asnSetClientCapabilitiesV2", Converter.AsnSetClientCapabilitiesV2Argument_Converter, Converter.AsnSetClientCapabilitiesV2Result_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * Event to send client capabilities to the server
	 *
	 * @param argument - An AsnGetClientCapabilitiesV2Argument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnGetClientCapabilitiesV2Result, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnGetClientCapabilitiesV2(argument: ENetUC_ClientCapabilities.AsnGetClientCapabilitiesV2Argument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_ClientCapabilities.AsnGetClientCapabilitiesV2Result | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_ClientCapabilities.AsnGetClientCapabilitiesV2Result, OperationIDs.OPID_asnGetClientCapabilitiesV2, "asnGetClientCapabilitiesV2", Converter.AsnGetClientCapabilitiesV2Argument_Converter, Converter.AsnGetClientCapabilitiesV2Result_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * Event the server will send if client capabilites have changed
	 * The server will dispatch events for subscribed contacts towards the clients
	 * The List will contain a list of client capabiliites with the user ids the refer to
	 *
	 * @param argument - An AsnClientCapabilitiesV2ChangedArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns undefined or, if bSendEventSynchronous has been set true when the event was sent
	 */
	public event_asnClientCapabilitiesV2Changed(argument: ENetUC_ClientCapabilities.AsnClientCapabilitiesV2ChangedArgument, invokeContext?: ISendInvokeContextParams): undefined | boolean {
		return this.handleEvent(argument, OperationIDs.OPID_asnClientCapabilitiesV2Changed, "asnClientCapabilitiesV2Changed", Converter.AsnClientCapabilitiesV2ChangedArgument_Converter, invokeContext);
	}

	// [PrintTSROSEOnInvokeswitchCase]
	/**
	 * This is the central onInvoke method that is called whenever a method of this module is called.
	 * Based on the operationID we step into the decoding of the method argument and call the method in the handler.
	 * The result is then again encoded and send to the other side.
	 *
	 * @param invoke - The (ROSE) decoded invoke which also contains the function argument (not yet decoded). The
	 * operationID is the one that defines which function we call. In the switch case we decode the methods argument
	 * and call the metho in the handler.
	 * @param invokeContext - The invoke related contextual data (see IReceiveInvokeContext)
	 * @param handler - This object is handling the invoke after having successfully decoded the argument.
	 * it contains the methods as defined in the asn.1 files.
	 * @returns ROSEReject if the request was not handled, ROSEResult for the invoke result, ROSEError for an error or undefined if an event was called
	 */
	public async onInvoke(invoke: ROSEInvoke, invokeContext: IReceiveInvokeContext, handler: IENetUC_ClientCapabilitiesROSE_Handler): Promise<ROSEReject | ROSEResult | ROSEError | undefined> {
		switch (invoke.operationID) {
			case OperationIDs.OPID_asnSetClientCapabilitiesV2:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnSetClientCapabilitiesV2, ENetUC_ClientCapabilities.AsnSetClientCapabilitiesV2Argument, Converter.AsnSetClientCapabilitiesV2Argument_Converter, Converter.AsnSetClientCapabilitiesV2Result_Converter, handler, handler.onInvoke_asnSetClientCapabilitiesV2, invokeContext);
			case OperationIDs.OPID_asnGetClientCapabilitiesV2:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnGetClientCapabilitiesV2, ENetUC_ClientCapabilities.AsnGetClientCapabilitiesV2Argument, Converter.AsnGetClientCapabilitiesV2Argument_Converter, Converter.AsnGetClientCapabilitiesV2Result_Converter, handler, handler.onInvoke_asnGetClientCapabilitiesV2, invokeContext);
			case OperationIDs.OPID_asnClientCapabilitiesV2Changed:
				return this.onEvent(invoke, invokeContext, handler);
			default:
				// If you land here stub of client and server are incompatible...
				debugger;
				return createInvokeReject(invoke, AsnInvokeProblemEnum.unrecognisedOperation, `${invoke.operationID} ("${invoke.operationName}") is not a function of ENetUC_ClientCapabilitiesROSE`);
		}
	}

	// [PrintTSROSEOnEventSwitchCase]
	/**
	 * This is the onEvent method that is called whenever an event is called in this module.
	 * It is called from the onInvoke in case of an event is being called.
	 * Depending on the handleEvents flag the event is either handled or cached.
	 *
	 * @param invoke - The (ROSE) decoded invoke which also contains the function argument (not yet decoded). The
	 * operationID is the one that defines which function we call. In the switch case we decode the methods argument
	 * and call the method in the handler.
	 * @param invokeContext - The invoke related contextual data (see IReceiveInvokeContext)
	 * @param handler - This object is handling the invoke after having successfully decoded the argument.
	 * it contains the methods as defined in the asn.1 files.
	 * @returns ROSEReject if the request was not handled or undefined
	 */
	private async onEvent(invoke: ROSEInvoke, invokeContext: IReceiveInvokeContext, handler: IENetUC_ClientCapabilitiesROSE_Handler): Promise<ROSEReject | undefined> {
		// If the class says do not handle events and the override flag in the invokeContext has not been set, add the event to the que, otherwise we dispatch it
		if (!this.handleEvents && !invokeContext?.handleEvent) {
			this.transport.log(ELogSeverity.debug, "Adding event to queue", "onEvent", this, { operationName: invoke.operationName, operationID: invoke.operationID });
			this.cachedEvents.push({ invoke, invokeContext, handler });
			return;
		}

		switch (invoke.operationID) {
			case OperationIDs.OPID_asnClientCapabilitiesV2Changed:
				return await this.handleOnEvent(invoke, OperationIDs.OPID_asnClientCapabilitiesV2Changed, ENetUC_ClientCapabilities.AsnClientCapabilitiesV2ChangedArgument, Converter.AsnClientCapabilitiesV2ChangedArgument_Converter, handler, handler.onEvent_asnClientCapabilitiesV2Changed, invokeContext);
			default:
				// If you land here stub of client and server are incompatible...
				debugger;
				return createInvokeReject(invoke, AsnInvokeProblemEnum.unrecognisedOperation, `${invoke.operationID} ("${invoke.operationName}") is not a function of ENetUC_ClientCapabilitiesROSE`);
		}
	}
}