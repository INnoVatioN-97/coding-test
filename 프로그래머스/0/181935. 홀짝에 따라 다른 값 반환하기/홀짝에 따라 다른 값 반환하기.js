function solution(n) {
  if (n % 2 === 0) {
    return new Array(n)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => {
        return i % 2 === 0;
      })
      .reduce((sum, cur) => {
        return (sum += cur * cur);
      }, 0);
  } else {
    return new Array(n)
      .fill(0)
      .map((_, i) => i + 1)
      .filter((i) => {
        return i % 2 === 1;
      })
      .reduce((sum, cur) => (sum += cur), 0);
  }
}