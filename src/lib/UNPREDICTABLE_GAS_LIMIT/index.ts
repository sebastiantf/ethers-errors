import { parseRevertReason } from '../../helpers';
import { Result } from '../../types';
import { UnpredictableGasLimitError } from './types';

export function parseUnpredictableGasLimitError(ethersError: unknown): Result {
  const parsedError: UnpredictableGasLimitError = JSON.parse(
    JSON.stringify(ethersError),
    // reviver method to recursively parse JsonRpcError & JsonRpcRequest strings
    (key, value: string) => {
      if (
        // error.error.body: JsonRpcError
        // error.error.requestBody: JsonRpcRequest
        (key.match(/body/) || key.match(/requestBody/)) &&
        value.match(/"jsonrpc"/)
      ) {
        return JSON.parse(value);
      }

      return value;
    }
  );

  const result: Result = {
    reason: parseRevertReason(parsedError.error.body.error.message),
    code: parsedError.code,
    parsedError,
    ethersError
  };
  return result;
}
