function solution(a, b) {
    var answer = 0;
    
    const answerA = Number(`${a}${b}`)
    const answerB = Number(`${b}${a}`)
    return answerA > answerB ? answerA : answerB;
}