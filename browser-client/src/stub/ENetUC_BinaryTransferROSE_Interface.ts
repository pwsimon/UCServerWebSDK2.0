// [PrintTSROSEInterfaceCode]
// [PrintTSROSEHeader]
/**
 * ENetUC_BinaryTransferROSE_Interface
 * "UC-Server-Access-Protocol-BinaryTransfer" ASN.1 interfaces.
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
import * as ENetUC_BinaryTransfer from "./ENetUC_BinaryTransfer";
// [PrintTSImports]
import * as ENetUC_Common from "./ENetUC_Common";
// [PrintTSRootTypes]
export const MODULE_NAME = "ENetUC_BinaryTransferROSEInterface";
export const MODULE_LASTCHANGE = "1970-01-01T00:00:00Z";
export const MODULE_MAJOR_VERSION = 8;
export const MODULE_MINOR_VERSION = 0;
export const MODULE_VERSION = "8.0.0";

// [PrintTSROSEInterface]
export interface IENetUC_BinaryTransferROSE {
	invoke_asnGetBinaryTransferSettings(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnInitBinaryTransferUpload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnSendBinaryChunk(argument: ENetUC_BinaryTransfer.AsnSendBinaryChunkArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnSendBinaryChunkResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnBinaryTransferUploadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnInitBinaryTransferDownload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnReceiveBinaryChunk(argument: ENetUC_BinaryTransfer.AsnReceiveBinaryChunkArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnReceiveBinaryChunkResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnBinaryTransferDownloadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnGetBinaryTransferMetaData(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnBinaryTransferRemoveElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
	invoke_asnBinaryTransferForwardElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementArgument, invokeContext?: ISendInvokeContextParams): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementResult | ENetUC_Common.AsnRequestError | AsnInvokeProblem>;
}

// [PrintTSROSEHandlerInterface]
// Contains all invokes of the interface (normally the server side)
export interface IENetUC_BinaryTransferROSE_Invoke_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
	onInvoke_asnGetBinaryTransferSettings(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnInitBinaryTransferUpload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnSendBinaryChunk(argument: ENetUC_BinaryTransfer.AsnSendBinaryChunkArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnSendBinaryChunkResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnBinaryTransferUploadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnInitBinaryTransferDownload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnReceiveBinaryChunk(argument: ENetUC_BinaryTransfer.AsnReceiveBinaryChunkArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnReceiveBinaryChunkResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnBinaryTransferDownloadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnGetBinaryTransferMetaData(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnBinaryTransferRemoveElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementResult | ENetUC_Common.AsnRequestError | undefined>;
	onInvoke_asnBinaryTransferForwardElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementResult | ENetUC_Common.AsnRequestError | undefined>;
}

// Contains all events of the interface (normally the client side)
export interface IENetUC_BinaryTransferROSE_Event_Handler {
	// Allows the implementer to (globally) implement an async local storage (thread local storage) for calls inside the called environment)
	setLogContext?(argument: unknown, invokeContext: IReceiveInvokeContext): void;
}

// Contains all invokes and events of the interface
export type IENetUC_BinaryTransferROSE_Handler = IENetUC_BinaryTransferROSE_Invoke_Handler & IENetUC_BinaryTransferROSE_Event_Handler;

// [PrintTSROSEServerCopyPasteInterface]
/* Copy paste code for the import statement
import { IReceiveInvokeContext } from "./TSROSEBase";
import * as ENetUC_Common from "./ENetUC_Common";
import { ENetUC_BinaryTransfer } from "./ENetUC_BinaryTransfer";
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
 * Getting file transfer settings from the server
 *
 * @param argument - Argument for the AsnGetBinaryTransferSettings
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetBinaryTransferSettingsResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetBinaryTransferSettings(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferSettingsResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * request a transferid for uploading a file towards the server
 *
 * @param argument - Argument for the asnInitBinaryTransferUpload
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnInitBinaryTransferUploadResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnInitBinaryTransferUpload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferUploadResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Sending a file chunk to the server via asn.1
 *
 * @param argument - Argument for the asnSendBinaryChunk
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnSendBinaryChunkResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnSendBinaryChunk(argument: ENetUC_BinaryTransfer.AsnSendBinaryChunkArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnSendBinaryChunkResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * binarytransfer upload completed
 *
 * Telling the server that a file upload to a 3rd party target was completed (or failed)
 *
 * @param argument - Argument for the UploadCompleted
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnBinaryTransferUploadCompletedResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnBinaryTransferUploadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferUploadCompletedResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Initializing fileDownload (getting Download source for the file with u8sTransferID)
 *
 * @param argument - Argument for the asnInitBinaryTransferDownload
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnInitBinaryTransferDownloadResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnInitBinaryTransferDownload(argument: ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnInitBinaryTransferDownloadResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Sending a file chunk from the server via asn.1
 *
 * @param argument - Argument for the asnReceiveBinaryChunk
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnReceiveBinaryChunkResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnReceiveBinaryChunk(argument: ENetUC_BinaryTransfer.AsnReceiveBinaryChunkArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnReceiveBinaryChunkResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Telling the server that a file download
 *
 * Telling the server that a file download from  a 3rd party target was completed (or failed)
 *
 * @param argument - Argument for the asnBinaryTransferDownloadCompleted
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnBinaryTransferDownloadCompletedResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnBinaryTransferDownloadCompleted(argument: ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferDownloadCompletedResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * Retrieves MetaData for a transfer id from the server
 *
 * @param argument - Argument for the asnGetBinaryTransferMetaData
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnGetBinaryTransferMetaDataResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnGetBinaryTransferMetaData(argument: ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnGetBinaryTransferMetaDataResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * remove file for a transfer id from the server - also the state inside the metadata base will be set
 *
 * removal of file and metadata will only be allowed for the origin sender of the file
 *
 * @param argument - Argument for the asnBinaryTransferRemoveElement
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnBinaryTransferRemoveElementResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnBinaryTransferRemoveElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferRemoveElementResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/

/**
 * not yet implemented - reserved for future use
 *
 * not yet implemented - reserved for future use
 *
 * @param argument - Argument for the asnBinaryTransferForwardElement
 * @param invokeContext - Invokecontext from the asn.1 lib (containing invoke related data)
 * @returns - AsnBinaryTransferForwardElementResult on success, AsnRequestError on error or undefined if the function is not implemented
 */
/*
public async onInvoke_asnBinaryTransferForwardElement(argument: ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementArgument, invokeContext: IReceiveInvokeContext): Promise<ENetUC_BinaryTransfer.AsnBinaryTransferForwardElementResult | ENetUC_Common.AsnRequestError | undefined> {
	return undefined;
}
*/
