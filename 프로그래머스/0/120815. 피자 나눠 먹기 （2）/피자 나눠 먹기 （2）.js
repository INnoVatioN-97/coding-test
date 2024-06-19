function solution(n) {
  let target = 1;
  while (true) {
    if ((n * target) % 6 === 0) break;
    else target++;
  }

  return n/6 * target;
}