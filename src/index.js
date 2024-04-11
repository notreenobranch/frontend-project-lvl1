import readlineSync from 'readline-sync';

const NUMBER_OF_ROUNDS = 3;

const app = (taskText, questionGenerator, answerCalculator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskText);

  for (let i = 0; i < NUMBER_OF_ROUNDS; i += 1) {
    const question = questionGenerator();
    const answer = answerCalculator(question);
    console.log(`Question: ${question}`);
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

export default app;
