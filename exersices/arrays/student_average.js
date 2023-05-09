let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(student.name);
  
  let average = getAverageScore(student.scores);
  console.log(average);
}

function getAverageScore(scores) {
  let totalOfAll = getTotalOfAllScores(scores);
  let numberOfScores = scores.length;
  let average = totalOfAll / numberOfScores;
  return average;
}

function getTotalOfAllScores(scores) {
  let totalOfAll = 0;
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    totalOfAll = totalOfAll + score;
  }
  return totalOfAll;
}
