import getRandomNumber from '../utils.js';
import { NUMBER_OF_ROUNDS, app } from '../index.js';

const TASK_TEXT = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 100);

  return `${operand1} ${operator} ${operand2}`;
};

const calculateExpression = (expression) => {
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

const problems = [];
const answers = [];

for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
  const problem = getRandomExpression();
  const answer = calculateExpression(problem);

  problems.push(problem);
  answers.push(answer);
}

export default () => app(TASK_TEXT, problems, answers);
