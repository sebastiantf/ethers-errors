import { resolve } from 'path';
import * as TJS from 'typescript-json-schema';

export const EXECUTION_REVERTED = 'execution reverted: ';

export const parseRevertReason = (message: string) =>
  message.slice(EXECUTION_REVERTED.length);

// https://github.com/YousefED/typescript-json-schema#programmatic-use
export const generateJSONSchema = (fileName: string, typeName: string) => {
  const program = TJS.getProgramFromFiles([resolve(fileName)], {
    strictNullChecks: true
  });

  return TJS.generateSchema(program, typeName, {
    required: true
  });
};
