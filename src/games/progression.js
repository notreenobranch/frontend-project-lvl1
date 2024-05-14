import getRandomNumber from '../utils.js';
import { NUMBER_OF_ROUNDS, app } from '../index.js';

const TASK_TEXT = 'What number is missing in the progression?';
const PROGRESSION_SIZE = 10;

const generateProgression = (size, firstNumber, step) => {
  const progression = [];

  for (let i = 0; i < size; i += 1) {
    const currentElement = firstNumber + step * i;
    progression.push(currentElement);
  }

  return progression;
};

const problems = [];
const answers = [];

for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
  const firstNumber = getRandomNumber(2, 20);
  const step = getRandomNumber(2, 6);
  const progression = generateProgression(PROGRESSION_SIZE, firstNumber, step);
  const emptyPosition = getRandomNumber(3, PROGRESSION_SIZE - 1);

  const answer = String(progression[emptyPosition]);
  progression[emptyPosition] = '..';
  const problem = progression.join((' '));

  problems.push(problem);
  answers.push(answer);
}

export default () => app(TASK_TEXT, problems, answers);
