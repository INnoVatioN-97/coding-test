function solution(array) {
    const arranged = array.sort((a,b)=>a-b)

    return arranged[(arranged.length-1)/2];
}