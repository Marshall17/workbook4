let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let sum = 0;
let average;

function getAverage(score) {
  let numLength = score.length;
  for (let i = 0; i < numLength; i++) {
    sum += score[i];
  }
  average = sum / numLength;
  console.log(average);

  return average;
}
let MyaverageScore = getAverage(myScores);
let YourAverageScore = getAverage(yourScores);
