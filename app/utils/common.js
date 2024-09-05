export const conditionalOperatorFunction = (condition, val1, val2) =>
  condition ? val1 : val2;

export const errorHandlerFunction = (response, error) => {
  if (!response.ok) {
    throw new Error(error);
  }
};
