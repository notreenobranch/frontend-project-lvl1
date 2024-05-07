import { getRandomIntInclusive, isPrime } from '../utils.js';
import { NUMBER_OF_ROUNDS, app } from '../index.js';

const TASK_TEXT = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const problems = [];
const answers = [];

for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
  const problem = getRandomIntInclusive(0, 100);
  const answer = isPrime(problem) ? 'yes' : 'no';

  problems.push(problem);
  answers.push(answer);
}

export default () => app(TASK_TEXT, problems, answers);
