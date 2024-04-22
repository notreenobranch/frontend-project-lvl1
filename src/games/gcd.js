import getRandomIntInclusive from '../utils.js';
import app from '../index.js';

const TASK_TEXT = 'Find the greatest common divisor of given numbers.';

const getRandomPair = () => [getRandomIntInclusive(1, 100), getRandomIntInclusive(1, 100)];

const getGCD = (a, b) => ((b === 0) ? a : getGCD(b, a % b));

const createQuestion = () => {
  const pair = getRandomPair();
  return pair.join(' ');
};

const getAnswer = (str) => {
  const [a, b] = str.split(' ');
  const answer = getGCD(a, b);
  return String(answer);
};

export default () => app(TASK_TEXT, createQuestion, getAnswer);
