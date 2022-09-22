import { ErrorCode } from '@ethersproject/logger';

/**
 * CALL_EXCEPTION Error
 *
 * Example:
 * ```json
 * {
 *   "reason": "Reverts: requireWithMessage",
 *   "code": "CALL_EXCEPTION",
 *   "method": "requireWithMessage()",
 *   "data": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b526576657274733a2072657175697265576974684d6573736167650000000000",
 *   "errorArgs": ["Reverts: requireWithMessage"],
 *   "errorName": "Error",
 *   "errorSignature": "Error(string)",
 *   "address": "0x719f833CE1C1490fD1d773625d097654B6f82310",
 *   "args": [],
 *   "transaction": {
 *     "data": "0x594c9297",
 *     "to": "0x719f833CE1C1490fD1d773625d097654B6f82310"
 *   }
 * }
 * ```
 */
export interface CallExceptionError {
  reason: string;
  code: ErrorCode;
  method: string;
  data: string;
  errorArgs: string[];
  errorName: string;
  errorSignature: string;
  address: string;
  args: string[];
  transaction: Transaction;
}

export interface Transaction {
  to: string;
  data: string;
}
