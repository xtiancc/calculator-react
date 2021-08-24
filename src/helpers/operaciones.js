export const operaciones = (numbers) => {
  const { numberOne, numberTwo } = numbers;

  const suma = () => numberOne + numberTwo;
  const resta = () => numberOne - numberTwo;
  const multiplicacion = () => numberOne * numberTwo;
  const division = () => numberOne / numberTwo;

  return { suma, resta, multiplicacion, division };
};
