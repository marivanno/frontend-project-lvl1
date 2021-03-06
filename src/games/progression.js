import startGame from '../index.js';
import generateRandomNumber from '../randomGenerator.js';

const generateArrayAndHiddenNumberForProgression = (sizeProgression) => {
  let a = generateRandomNumber(1, 9);
  const hiddenNumber = generateRandomNumber(1, 8);
  const arr = [];
  for (let i = 0; i < sizeProgression; i += 1) {
    arr.push(a);
    if (arr[i] === arr[hiddenNumber]) {
      arr.push('..');
      a += 2;
    }
    a += 2;
  }
  return [arr, arr[hiddenNumber] + 2];
};

// game logic brain-progression.js, see index.js
const getDataGameRound = () => {
  const description = 'What number is missing in the progression?';
  const [arr, answer] = generateArrayAndHiddenNumberForProgression(9);
  const question = `Question: ${arr.join(' ')} ?`;
  const result = String(answer);
  return [result, description, question];
};
export default () => startGame(getDataGameRound);
