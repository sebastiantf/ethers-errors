import { Result } from '../../types';
import { CallExceptionError } from './types';

export function parseCallExceptionError(ethersError: unknown): Result {
  const parsedError: CallExceptionError = JSON.parse(
    JSON.stringify(ethersError)
  );

  const result: Result = {
    reason: parsedError.reason,
    code: parsedError.code,
    parsedError,
    ethersError
  };
  return result;
}
