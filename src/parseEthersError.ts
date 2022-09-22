import { Logger } from '@ethersproject/logger';
import { parseUnpredictableGasLimitError } from './lib/UNPREDICTABLE_GAS_LIMIT';
import { EthersError, Result } from './types';

export function parseEthersError(ethersError: EthersError): Result {
  switch (ethersError.code) {
    case Logger.errors.UNPREDICTABLE_GAS_LIMIT:
      return parseUnpredictableGasLimitError(ethersError);

    default:
      throw new Error('Failed to parse ethers error');
  }
}
