import readlineSync from 'readline-sync';

export const NUMBER_OF_ROUNDS = 3;

export const app = (taskText, problems, answers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskText);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const problem = problems[i];
    const answer = answers[i];

    console.log(`Question: ${problem}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
