import { ErrorCode } from '@ethersproject/logger';
import { JsonRpcError, JsonRpcRequest } from '@json-rpc-tools/types';

/**
 * UNPREDICTABLE_GAS_LIMIT Error
 *
 * Example:
 * ```json
 * {
 *   "reason": "cannot estimate gas; transaction may fail or may require manual gas limit",
 *   "code": "UNPREDICTABLE_GAS_LIMIT",
 *   "error": {
 *     "reason": "processing response error",
 *     "code": "SERVER_ERROR",
 *     "body": "{\"jsonrpc\":\"2.0\",\"id\":44,\"error\":{\"code\":3,\"message\":\"execution reverted: Reverts: requireWithMessage\",\"data\":\"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b526576657274733a2072657175697265576974684d6573736167650000000000\"}}",
 *     "error": {
 *       "code": 3,
 *       "data": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b526576657274733a2072657175697265576974684d6573736167650000000000"
 *     },
 *     "requestBody": "{\"method\":\"eth_estimateGas\",\"params\":[{\"to\":\"0x719f833ce1c1490fd1d773625d097654b6f82310\",\"data\":\"0x594c9297\"}],\"id\":44,\"jsonrpc\":\"2.0\"}",
 *     "requestMethod": "POST",
 *     "url": "https://rpc.ankr.com/eth_goerli"
 *   },
 *   "method": "estimateGas",
 *   "transaction": {
 *     "to": "0x719f833CE1C1490fD1d773625d097654B6f82310",
 *     "data": "0x594c9297",
 *     "accessList": null
 *   }
 * }
 * ```
 */
export interface UnpredictableGasLimitError {
  reason: string;
  code: ErrorCode;
  method: string;
  transaction: Transaction;
  error: Error;
}

export interface Error {
  reason: string;
  code: string;
  body: JsonRpcError;
  error: ErrorError;
  requestBody: JsonRpcRequest;
  requestMethod: string;
  url: string;
}

export interface ErrorError {
  code: number;
  data: string;
}

export interface Transaction {
  to: string;
  data: string;
}
