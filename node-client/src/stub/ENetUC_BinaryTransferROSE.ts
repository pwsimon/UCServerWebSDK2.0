// [PrintTSROSEHeader]
/**
 * ENetUC_BinaryTransferROSE
 * "UC-Server-Access-Protocol-BinaryTransfer" ASN.1 stubs.
 * This file was generated by estos esnacc (V6.0.19, 20.09.2024)
 * based on Coral WinSnacc written by Deepak Gupta
 * NOTE: This is a machine generated file - editing not recommended
 */

// prettier-ignore
/* eslint-disable */
// [PrintTSROSEImports]
// Global imports
import { IENetUC_BinaryTransferROSE, IENetUC_BinaryTransferROSE_Handler } from "./ENetUC_BinaryTransferROSE_Interface";
import { ROSEError, ROSEInvoke, ROSEReject, ROSEResult } from "./SNACCROSE";
import { AsnInvokeProblem, AsnInvokeProblemEnum, createInvokeReject, IASN1Transport, IASN1LogData, IReceiveInvokeContext, IInvokeHandler, ELogSeverity, ROSEBase } from "./TSROSEBase";
import { ISendInvokeContextParams } from "./TSInvokeContext";
// Local imports
import * as ENetUC_BinaryTransfer from "./ENetUC_BinaryTransfer";
import * as Converter from "./ENetUC_BinaryTransfer_Converter";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
import * as ENetUC_Common_Converter from "./ENetUC_Common_Converter";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_BinaryTransferROSE";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSROSEOperationDefines]
export enum OperationIDs {
	OPID_asnGetBinaryTransferSettings = 3400,
	OPID_asnInitBinaryTransferUpload = 3410,
	OPID_asnSendBinaryChunk = 3411,
	OPID_asnBinaryTransferUploadCompleted = 3412,
	OPID_asnInitBinaryTransferDownload = 3420,
	OPID_asnReceiveBinaryChunk = 3421,
	OPID_asnBinaryTransferDownloadCompleted = 3422,
	OPID_asnGetBinaryTransferMetaData = 3423,
	OPID_asnBinaryTransferRemoveElement = 3424,
	OPID_asnBinaryTransferForwardElement = 3425
}

// [PrintTSROSEModuleComment]
/**
 * Data structures and methods to transport binary data between clients and the server
 * The binary transfer can be used to transport any binary data blob between clients. It´s primary targeting to transfer
 * files within the chat but may be used to implement file sharing in remote desktop sessions as well as to implement a new procall function:
 * Provinding files for customers.
 * The interface is simple and has no other dependencies.
 * Primary target is to be able to transport the file contents inband in the asn.1 connection.
 * Later the implementation will also target 3rd party file shares like onedrive, awss3, dropbox or ucweb.
 */

// [PrintTSROSEClass]
export class ENetUC_BinaryTransferROSE extends ROSEBase implements IInvokeHandler, IENetUC_BinaryTransferROSE {
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
			case OperationIDs.OPID_asnGetBinaryTransferSettings:
				return "asnGetBinaryTransferSettings";
			case OperationIDs.OPID_asnInitBinaryTransferUpload:
				return "asnInitBinaryTransferUpload";
			case OperationIDs.OPID_asnSendBinaryChunk:
				return "asnSendBinaryChunk";
			case OperationIDs.OPID_asnBinaryTransferUploadCompleted:
				return "asnBinaryTransferUploadCompleted";
			case OperationIDs.OPID_asnInitBinaryTransferDownload:
				return "asnInitBinaryTransferDownload";
			case OperationIDs.OPID_asnReceiveBinaryChunk:
				return "asnReceiveBinaryChunk";
			case OperationIDs.OPID_asnBinaryTransferDownloadCompleted:
				return "asnBinaryTransferDownloadCompleted";
			case OperationIDs.OPID_asnGetBinaryTransferMetaData:
				return "asnGetBinaryTransferMetaData";
			case OperationIDs.OPID_asnBinaryTransferRemoveElement:
				return "asnBinaryTransferRemoveElement";
			case OperationIDs.OPID_asnBinaryTransferForwardElement:
				return "asnBinaryTransferForwardElement";
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
			case "asnGetBinaryTransferSettings":
				return OperationIDs.OPID_asnGetBinaryTransferSettings;
			case "asnInitBinaryTransferUpload":
				return OperationIDs.OPID_asnInitBinaryTransferUpload;
			case "asnSendBinaryChunk":
				return OperationIDs.OPID_asnSendBinaryChunk;
			case "asnBinaryTransferUploadCompleted":
				return OperationIDs.OPID_asnBinaryTransferUploadCompleted;
			case "asnInitBinaryTransferDownload":
				return OperationIDs.OPID_asnInitBinaryTransferDownload;
			case "asnReceiveBinaryChunk":
				return OperationIDs.OPID_asnReceiveBinaryChunk;
			case "asnBinaryTransferDownloadCompleted":
				return OperationIDs.OPID_asnBinaryTransferDownloadCompleted;
			case "asnGetBinaryTransferMetaData":
				return OperationIDs.OPID_asnGetBinaryTransferMetaData;
			case "asnBinaryTransferRemoveElement":
				return OperationIDs.OPID_asnBinaryTransferRemoveElement;
			case "asnBinaryTransferForwardElement":
				return OperationIDs.OPID_asnBinaryTransferForwardElement;
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
	public constructor(transport: IASN1Transport, handleEvents: boolean, handler?: Partial<IENetUC_BinaryTransferROSE_Handler>) {
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
	public setHandler(handler: Partial<IENetUC_BinaryTransferROSE_Handler>): void {
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnGetBinaryTransferSettings, "asnGetBinaryTransferSettings");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnInitBinaryTransferUpload, "asnInitBinaryTransferUpload");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnSendBinaryChunk, "asnSendBinaryChunk");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnBinaryTransferUploadCompleted, "asnBinaryTransferUploadCompleted");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnInitBinaryTransferDownload, "asnInitBinaryTransferDownload");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnReceiveBinaryChunk, "asnReceiveBinaryChunk");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnBinaryTransferDownloadCompleted, "asnBinaryTransferDownloadCompleted");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnGetBinaryTransferMetaData, "asnGetBinaryTransferMetaData");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnBinaryTransferRemoveElement, "asnBinaryTransferRemoveElement");
		this.transport.registerOperation(this, handler, OperationIDs.OPID_asnBinaryTransferForwardElement, "asnBinaryTransferForwardElement");
		this.transport.registerModuleVersion("ENetUC_BinaryTransfer", 8, 0);
	}

	// [PrintTSROSEInvokeMethods]

	// [PrintTSROSEInvokeMethod]
	/**
	 * Getting file transfer settings from the server
	 *
	 * @param argument - An AsnGetBinaryTransferSettingsArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnGetBinaryTransferSettingsResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnGetBinaryTransferSettings(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsResult, OperationIDs.OPID_asnGetBinaryTransferSettings, "asnGetBinaryTransferSettings", Converter.AsnGetBinaryTransferSettingsArgument_Converter, Converter.AsnGetBinaryTransferSettingsResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * request a transferid for uploading a file towards the server
	 *
	 * @param argument - An AsnInitBinaryTransferUploadArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnInitBinaryTransferUploadResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnInitBinaryTransferUpload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadResult, OperationIDs.OPID_asnInitBinaryTransferUpload, "asnInitBinaryTransferUpload", Converter.AsnInitBinaryTransferUploadArgument_Converter, Converter.AsnInitBinaryTransferUploadResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * Sending a file chunk to the server via asn.1
	 *
	 * @param argument - An AsnSendBinaryChunkArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnSendBinaryChunkResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnSendBinaryChunk(argument: ENetUC_BinaryTransfer.AsnSendBinaryChunkArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnSendBinaryChunkResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnSendBinaryChunkResult, OperationIDs.OPID_asnSendBinaryChunk, "asnSendBinaryChunk", Converter.AsnSendBinaryChunkArgument_Converter, Converter.AsnSendBinaryChunkResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * binarytransfer upload completed
	 * Telling the server that a file upload to a 3rd party target was completed (or failed)
	 *
	 * @param argument - An AsnBinaryTransferUploadCompletedArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnBinaryTransferUploadCompletedResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnBinaryTransferUploadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedResult, OperationIDs.OPID_asnBinaryTransferUploadCompleted, "asnBinaryTransferUploadCompleted", Converter.AsnBinaryTransferUploadCompletedArgument_Converter, Converter.AsnBinaryTransferUploadCompletedResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * Initializing fileDownload (getting Download source for the file with u8sTransferID)
	 *
	 * @param argument - An AsnInitBinaryTransferDownloadArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnInitBinaryTransferDownloadResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnInitBinaryTransferDownload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadResult, OperationIDs.OPID_asnInitBinaryTransferDownload, "asnInitBinaryTransferDownload", Converter.AsnInitBinaryTransferDownloadArgument_Converter, Converter.AsnInitBinaryTransferDownloadResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * Sending a file chunk from the server via asn.1
	 *
	 * @param argument - An AsnReceiveBinaryChunkArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnReceiveBinaryChunkResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnReceiveBinaryChunk(argument: ENetUC_BinaryTransfer.AsnReceiveBinaryChunkArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnReceiveBinaryChunkResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnReceiveBinaryChunkResult, OperationIDs.OPID_asnReceiveBinaryChunk, "asnReceiveBinaryChunk", Converter.AsnReceiveBinaryChunkArgument_Converter, Converter.AsnReceiveBinaryChunkResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * Telling the server that a file download
	 * Telling the server that a file download from  a 3rd party target was completed (or failed)
	 *
	 * @param argument - An AsnBinaryTransferDownloadCompletedArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnBinaryTransferDownloadCompletedResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnBinaryTransferDownloadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedResult, OperationIDs.OPID_asnBinaryTransferDownloadCompleted, "asnBinaryTransferDownloadCompleted", Converter.AsnBinaryTransferDownloadCompletedArgument_Converter, Converter.AsnBinaryTransferDownloadCompletedResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * Retrieves MetaData for a transfer id from the server
	 *
	 * @param argument - An AsnGetBinaryTransferMetaDataArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnGetBinaryTransferMetaDataResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnGetBinaryTransferMetaData(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataResult, OperationIDs.OPID_asnGetBinaryTransferMetaData, "asnGetBinaryTransferMetaData", Converter.AsnGetBinaryTransferMetaDataArgument_Converter, Converter.AsnGetBinaryTransferMetaDataResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * remove file for a transfer id from the server - also the state inside the metadata base will be set
	 * removal of file and metadata will only be allowed for the origin sender of the file
	 *
	 * @param argument - An AsnBinaryTransferRemoveElementArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnBinaryTransferRemoveElementResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnBinaryTransferRemoveElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementResult, OperationIDs.OPID_asnBinaryTransferRemoveElement, "asnBinaryTransferRemoveElement", Converter.AsnBinaryTransferRemoveElementArgument_Converter, Converter.AsnBinaryTransferRemoveElementResult_Converter, invokeContext);
	}

	// [PrintTSROSEInvokeMethod]
	/**
	 * not yet implemented - reserved for future use
	 * not yet implemented - reserved for future use
	 *
	 * @param argument - An AsnBinaryTransferForwardElementArgument object containing all the relevant parameters for the call
	 * @param invokeContext - Invoke related contextual data (e.g. a clientConnectionID)
	 * @returns a Promise resolving into AsnBinaryTransferForwardElementResult, an AsnRequestError or AsnInvokeProblem object
	 */
	public async invoke_asnBinaryTransferForwardElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem> {
		return this.handleInvoke(argument, ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementResult, OperationIDs.OPID_asnBinaryTransferForwardElement, "asnBinaryTransferForwardElement", Converter.AsnBinaryTransferForwardElementArgument_Converter, Converter.AsnBinaryTransferForwardElementResult_Converter, invokeContext);
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
	public async onInvoke(invoke: ROSEInvoke, invokeContext: IReceiveInvokeContext, handler: IENetUC_BinaryTransferROSE_Handler): Promise<ROSEReject | ROSEResult | ROSEError | undefined> {
		switch (invoke.operationID) {
			case OperationIDs.OPID_asnGetBinaryTransferSettings:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnGetBinaryTransferSettings, ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsArgument, Converter.AsnGetBinaryTransferSettingsArgument_Converter, Converter.AsnGetBinaryTransferSettingsResult_Converter, handler, handler.onInvoke_asnGetBinaryTransferSettings, invokeContext);
			case OperationIDs.OPID_asnInitBinaryTransferUpload:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnInitBinaryTransferUpload, ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadArgument, Converter.AsnInitBinaryTransferUploadArgument_Converter, Converter.AsnInitBinaryTransferUploadResult_Converter, handler, handler.onInvoke_asnInitBinaryTransferUpload, invokeContext);
			case OperationIDs.OPID_asnSendBinaryChunk:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnSendBinaryChunk, ENetUC_BinaryTransfer.AsnSendBinaryChunkArgument, Converter.AsnSendBinaryChunkArgument_Converter, Converter.AsnSendBinaryChunkResult_Converter, handler, handler.onInvoke_asnSendBinaryChunk, invokeContext);
			case OperationIDs.OPID_asnBinaryTransferUploadCompleted:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnBinaryTransferUploadCompleted, ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedArgument, Converter.AsnBinaryTransferUploadCompletedArgument_Converter, Converter.AsnBinaryTransferUploadCompletedResult_Converter, handler, handler.onInvoke_asnBinaryTransferUploadCompleted, invokeContext);
			case OperationIDs.OPID_asnInitBinaryTransferDownload:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnInitBinaryTransferDownload, ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadArgument, Converter.AsnInitBinaryTransferDownloadArgument_Converter, Converter.AsnInitBinaryTransferDownloadResult_Converter, handler, handler.onInvoke_asnInitBinaryTransferDownload, invokeContext);
			case OperationIDs.OPID_asnReceiveBinaryChunk:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnReceiveBinaryChunk, ENetUC_BinaryTransfer.AsnReceiveBinaryChunkArgument, Converter.AsnReceiveBinaryChunkArgument_Converter, Converter.AsnReceiveBinaryChunkResult_Converter, handler, handler.onInvoke_asnReceiveBinaryChunk, invokeContext);
			case OperationIDs.OPID_asnBinaryTransferDownloadCompleted:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnBinaryTransferDownloadCompleted, ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedArgument, Converter.AsnBinaryTransferDownloadCompletedArgument_Converter, Converter.AsnBinaryTransferDownloadCompletedResult_Converter, handler, handler.onInvoke_asnBinaryTransferDownloadCompleted, invokeContext);
			case OperationIDs.OPID_asnGetBinaryTransferMetaData:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnGetBinaryTransferMetaData, ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataArgument, Converter.AsnGetBinaryTransferMetaDataArgument_Converter, Converter.AsnGetBinaryTransferMetaDataResult_Converter, handler, handler.onInvoke_asnGetBinaryTransferMetaData, invokeContext);
			case OperationIDs.OPID_asnBinaryTransferRemoveElement:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnBinaryTransferRemoveElement, ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementArgument, Converter.AsnBinaryTransferRemoveElementArgument_Converter, Converter.AsnBinaryTransferRemoveElementResult_Converter, handler, handler.onInvoke_asnBinaryTransferRemoveElement, invokeContext);
			case OperationIDs.OPID_asnBinaryTransferForwardElement:
				return await this.handleOnInvoke(invoke, OperationIDs.OPID_asnBinaryTransferForwardElement, ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementArgument, Converter.AsnBinaryTransferForwardElementArgument_Converter, Converter.AsnBinaryTransferForwardElementResult_Converter, handler, handler.onInvoke_asnBinaryTransferForwardElement, invokeContext);
			default:
				// If you land here stub of client and server are incompatible...
				debugger;
				return createInvokeReject(invoke, AsnInvokeProblemEnum.unrecognisedOperation, `${invoke.operationID} ("${invoke.operationName}") is not a function of ENetUC_BinaryTransferROSE`);
		}
	}
}