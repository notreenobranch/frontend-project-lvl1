import getRandomIntInclusive from '../lib.js';
import app from '../index.js';

const TASK_TEXT = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }

  if (num === 2) {
    return 'yes';
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => app(TASK_TEXT, getRandomIntInclusive, isPrime);
