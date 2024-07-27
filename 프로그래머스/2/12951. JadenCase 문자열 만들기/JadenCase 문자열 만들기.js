function solution(s) {
    
    const splitted = s.split(' ');
    let answer = []
    for (const word of splitted){
        if(Number(word.charAt(0)) !== Number.isNaN()){
            answer.push(word.charAt(0).toUpperCase() + word.substring(1, word.length).toLowerCase())
        }
    }
    
    return answer.join(' ')
    
}