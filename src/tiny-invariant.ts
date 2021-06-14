// @flow
const prefix: string = 'Invariant failed';

// Throw an error if the condition fails
export default function invariant(
  condition: any,
  message?: string,
): asserts condition {
  if (condition) {
    return;
  }
  // Condition not passed

  // We error
  throw new Error(`${prefix}: ${message || ''}`);
}
