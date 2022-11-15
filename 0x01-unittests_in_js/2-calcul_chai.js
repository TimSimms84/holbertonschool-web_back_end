function calculateNumber(type, a, b) {
  const numA = Math.round(a);
  const numB = Math.round(b);
  let answer = 0;
  if (type === 'SUM') {
    answer = numA + numB;
  } else if (type === 'SUBTRACT') {
    answer = numA - numB;
  } else if (type === 'DIVIDE') {
    if (numB === 0) {
      return 'Error';
    }
    answer = numA / numB;
  }
  return answer;
}

module.exports = calculateNumber;
