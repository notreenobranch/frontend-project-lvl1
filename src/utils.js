// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export const getRandomIntInclusive = (min = 1, max = 100) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const isEven = (num) => num % 2 === 0;

export const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomIntInclusive(0, 2)];
  const operand1 = getRandomIntInclusive(1, 100);
  const operand2 = getRandomIntInclusive(1, 100);

  return `${operand1} ${operator} ${operand2}`;
};

export const calculateExpression = (expression) => {
  const [number1, operator, number2] = expression.split(' ');
  const operand1 = Number(number1);
  const operand2 = Number(number2);

  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new Error(`Unsupported operator: '${operator}'!`);
  }

  return String(result);
};

export const getGCD = (a, b) => ((b === 0) ? a : getGCD(b, a % b));

export const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const generateProgression = (size, firstNumber, step) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    const currentElement = firstNumber + step * i;
    progression.push(currentElement);
  }

  return progression;
};
