import getRandomNumber from '../utils.js';
import { NUMBER_OF_ROUNDS, app } from '../index.js';

const TASK_TEXT = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => ((b === 0) ? a : getGCD(b, a % b));

const problems = [];
const answers = [];

for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const problem = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));

  problems.push(problem);
  answers.push(answer);
}

export default () => app(TASK_TEXT, problems, answers);
