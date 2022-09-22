import { generateJSONSchema } from '../src/helpers';

export const RPC_URL = 'https://rpc.ankr.com/eth_goerli';

export const REVERTS_ADDRESS = '0x719f833CE1C1490fD1d773625d097654B6f82310';

export const generateResultJSONSchema = () =>
  generateJSONSchema('src/types.ts', 'Result');
