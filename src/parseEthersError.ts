import { Logger } from '@ethersproject/logger';
import { parseCallExceptionError } from './lib/CALL_EXCEPTION';
import { parseUnpredictableGasLimitError } from './lib/UNPREDICTABLE_GAS_LIMIT';
import { EthersError, Result } from './types';

export function parseEthersError(ethersError: EthersError): Result {
  switch (ethersError.code) {
    case Logger.errors.UNPREDICTABLE_GAS_LIMIT:
      return parseUnpredictableGasLimitError(ethersError);
    case Logger.errors.CALL_EXCEPTION:
      return parseCallExceptionError(ethersError);

    default:
      throw new Error('Failed to parse ethers error');
  }
}
