// 최대 공약수 구하기
function generateGreatestCommonDivisor(a, b) {
    return a % b === 0 ? b : generateGreatestCommonDivisor(b, a % b)
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let gcd = generateGreatestCommonDivisor(numer, denom);
    
    return [numer / gcd, denom / gcd]
}
