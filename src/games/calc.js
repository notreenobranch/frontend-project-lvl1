import getRandomIntInclusive from '../lib.js';
import app from '../index.js';

const TASK_TEXT = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomIntInclusive(0, 2)];
  const operand1 = getRandomIntInclusive(1, 50);
  const operand2 = getRandomIntInclusive(1, 50);

  return `${operand1} ${operator} ${operand2}`;
};

const calculateExpression = (expressionString) => {
  const [number1, operator, number2] = expressionString.split(' ');
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
      break;
  }

  return String(result);
};

export default () => app(TASK_TEXT, getRandomExpression, calculateExpression);
