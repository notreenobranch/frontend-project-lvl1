import getRandomIntInclusive from '../lib.js';
import app from '../index.js';

const TASK_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export default () => app(TASK_TEXT, getRandomIntInclusive, isEven);
