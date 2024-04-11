import getRandomIntInclusive from '../lib.js';
import app from '../index.js';

const TASK_TEXT = 'What number is missing in the progression?';

let answer;

const generateProgression = (size, first, step) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    const currentElement = first + step * i;
    progression.push(currentElement);
  }

  return progression;
};

const createQuestion = () => {
  const size = 10;
  const first = getRandomIntInclusive(2, 20);
  const step = getRandomIntInclusive(2, 6);
  const progression = generateProgression(size, first, step);
  const missingNumberPosition = getRandomIntInclusive(3, size - 1);

  answer = progression[missingNumberPosition];
  progression[missingNumberPosition] = '..';

  return progression.join(' ');
};

const getAnswer = () => String(answer);

export default () => app(TASK_TEXT, createQuestion, getAnswer);
