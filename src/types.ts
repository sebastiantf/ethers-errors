import { ErrorCode } from '@ethersproject/logger';
import { UnpredictableGasLimitError } from './lib/UNPREDICTABLE_GAS_LIMIT/types';

export type ParsedError = UnpredictableGasLimitError;

/**
 * Result
 *
 * Example:
 * ```json
 * {
 *   "reason": "Reverts: requireWithMessage",
 *   "code": "UNPREDICTABLE_GAS_LIMIT",
 *   "parsedError": {
 *     "reason": "cannot estimate gas; transaction may fail or may require manual gas limit",
 *     "code": "UNPREDICTABLE_GAS_LIMIT",
 *     "error": {
 *       "reason": "processing response error",
 *       "code": "SERVER_ERROR",
 *       "body": {
 *         "jsonrpc": "2.0",
 *         "id": 44,
 *         "error": {
 *           "code": 3,
 *           "message": "execution reverted: Reverts: requireWithMessage",
 *           "data": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b526576657274733a2072657175697265576974684d6573736167650000000000"
 *         }
 *       },
 *       "error": {
 *         "code": 3,
 *         "data": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b526576657274733a2072657175697265576974684d6573736167650000000000"
 *       },
 *       "requestBody": {
 *         "method": "eth_estimateGas",
 *         "params": [
 *           {
 *             "to": "0x719f833ce1c1490fd1d773625d097654b6f82310",
 *             "data": "0x594c9297"
 *           }
 *         ],
 *         "id": 44,
 *         "jsonrpc": "2.0"
 *       },
 *       "requestMethod": "POST",
 *       "url": "https://rpc.ankr.com/eth_goerli"
 *     },
 *     "method": "estimateGas",
 *     "transaction": {
 *       "to": "0x719f833CE1C1490fD1d773625d097654B6f82310",
 *       "data": "0x594c9297",
 *       "accessList": null
 *     }
 *   },
 *   "ethersError": {
 *     // Raw error from ethers
 *   }
 * }
 * ```
 */
export interface Result {
  reason: string;
  code: ErrorCode;
  parsedError: ParsedError;
  ethersError: unknown;
}

export interface EthersError {
  code: ErrorCode;
}
