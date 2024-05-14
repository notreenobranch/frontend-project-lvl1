import getRandomNumber from '../utils.js';
import { NUMBER_OF_ROUNDS, app } from '../index.js';

const TASK_TEXT = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
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

const problems = [];
const answers = [];

for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
  const problem = getRandomNumber(0, 100);
  const answer = isPrime(problem) ? 'yes' : 'no';

  problems.push(problem);
  answers.push(answer);
}

export default () => app(TASK_TEXT, problems, answers);
