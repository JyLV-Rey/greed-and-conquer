export function SetRandomValue(min = 0, max = 0, prob = 100) {
  // prob = chance to return random number, otherwise return 0
  const NewMax = max+1;
  const p = prob/100;
  if (Math.random() > p) {
    return Math.floor(Math.random() * (NewMax - min) + min);
  } else {
    return 0;
  }
}

export function GenerateMatrix(n, min, max, p, cycle = false) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i === j && !cycle) {
        matrix[i][j] = 0;
      } else {
        const value = SetRandomValue(min, max, p);
        matrix[i][j] = value;
        matrix[j][i] = value;
      }
    }
  }

  return matrix;
}





