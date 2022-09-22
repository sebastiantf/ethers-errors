export const EXECUTION_REVERTED = 'execution reverted: ';

export const parseRevertReason = (message: string) =>
  message.slice(EXECUTION_REVERTED.length);
