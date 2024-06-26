import getRandomNumber from '../utils.js';
import { NUMBER_OF_ROUNDS, app } from '../index.js';

const TASK_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const problems = [];
const answers = [];

for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
  const problem = getRandomNumber(0, 100);
  const answer = isEven(problem) ? 'yes' : 'no';

  problems.push(problem);
  answers.push(answer);
}

export default () => app(TASK_TEXT, problems, answers);
