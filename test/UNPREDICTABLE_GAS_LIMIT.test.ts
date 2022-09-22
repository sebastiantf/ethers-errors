import { Logger } from '@ethersproject/logger';
import { Reverts__factory } from '@sebastiantf/reverts/dist/types/factories/Reverts__factory';
import { Reverts } from '@sebastiantf/reverts/dist/types/Reverts';
import { ethers } from 'ethers';
import { parseEthersError } from '../src';
import { EthersError } from '../src/types';
import ResultSchema from './schemas/Result.schema.json';
import { REVERTS_ADDRESS, RPC_URL } from './utils';

import Ajv, { ValidateFunction } from 'ajv';
const ajv = new Ajv();

let provider: ethers.providers.JsonRpcProvider;
let reverts: Reverts;
let validateResult: ValidateFunction;

beforeAll(() => {
  provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  reverts = Reverts__factory.connect(REVERTS_ADDRESS, provider);
  // generate and compile JSON schema for Result
  validateResult = ajv.compile(ResultSchema);
});

describe(Logger.errors.UNPREDICTABLE_GAS_LIMIT, () => {
  it('requireWithMessage()', async () => {
    try {
      await reverts.estimateGas.requireWithMessage();
    } catch (error) {
      expect(validateResult(error)).toEqual(false);

      const result = parseEthersError(error as EthersError);

      expect(result.reason).toEqual('Reverts: requireWithMessage');
      expect(result.code).toEqual(Logger.errors.UNPREDICTABLE_GAS_LIMIT);
      expect(result.parsedError).toBeDefined();
      expect(JSON.stringify(result.ethersError)).toEqual(JSON.stringify(error));

      // Runtime typecheck validation with ajv
      expect(validateResult(result)).toEqual(true);
    }
  });
});
