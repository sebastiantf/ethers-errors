import { Logger } from '@ethersproject/logger';
import { Reverts__factory } from '@sebastiantf/reverts/dist/types/factories/Reverts__factory';
import { Reverts } from '@sebastiantf/reverts/dist/types/Reverts';
import { ethers } from 'ethers';
import { parseEthersError } from '../src';
import { EthersError } from '../src/types';
import { REVERTS_ADDRESS, RPC_URL } from './utils';

let provider: ethers.providers.JsonRpcProvider;
let reverts: Reverts;

beforeAll(() => {
  provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  reverts = Reverts__factory.connect(REVERTS_ADDRESS, provider);
});

describe(Logger.errors.UNPREDICTABLE_GAS_LIMIT, () => {
  it('requireWithMessage()', async () => {
    try {
      await reverts.estimateGas.requireWithMessage();
    } catch (error) {
      const result = parseEthersError(error as EthersError);

      expect(result.reason).toEqual('Reverts: requireWithMessage');
      expect(result.code).toEqual(Logger.errors.UNPREDICTABLE_GAS_LIMIT);
      expect(result.parsedError).toBeDefined();
      expect(JSON.stringify(result.ethersError)).toEqual(JSON.stringify(error));
    }
  });
});
