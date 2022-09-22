import { Logger } from '@ethersproject/logger';
import { Reverts__factory } from '@sebastiantf/reverts/dist/types/factories/Reverts__factory';
import { Reverts } from '@sebastiantf/reverts/dist/types/Reverts';
import { ethers } from 'ethers';
import { generateResultJSONSchema, REVERTS_ADDRESS, RPC_URL } from './utils';

import Ajv, { ValidateFunction } from 'ajv';
import { parseEthersError } from '../src';
import { EthersError } from '../src/types';
const ajv = new Ajv();

let provider: ethers.providers.JsonRpcProvider;
let reverts: Reverts;
let validateResult: ValidateFunction;

beforeAll(() => {
  provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  reverts = Reverts__factory.connect(REVERTS_ADDRESS, provider);
  validateResult = ajv.compile(
    JSON.parse(JSON.stringify(generateResultJSONSchema()))
  );
});

describe(Logger.errors.CALL_EXCEPTION, () => {
  it('requireWithMessage()', async () => {
    try {
      await reverts.requireWithMessage();
    } catch (error) {
      expect(validateResult(error)).toEqual(false);

      const result = parseEthersError(error as EthersError);

      expect(result.reason).toEqual('Reverts: requireWithMessage');
      expect(result.code).toEqual(Logger.errors.CALL_EXCEPTION);
      expect(result.parsedError).toBeDefined();
      expect(JSON.stringify(result.ethersError)).toEqual(JSON.stringify(error));

      // Runtime typecheck validation with ajv
      expect(validateResult(result)).toEqual(true);
    }
  });
});
