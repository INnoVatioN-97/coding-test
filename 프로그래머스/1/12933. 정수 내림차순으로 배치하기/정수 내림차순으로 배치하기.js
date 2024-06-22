function solution(n) {
    const arr = String(n).split('')
    
    return Number(arr.sort((a,b)=>Number(b)-Number(a)).join(''))
}