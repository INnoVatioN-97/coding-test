function solution(n) {
    const results = []
    for(let i=n; i>0; i--){
        if(n%i === 0){
            results.push(i)
        }
    }
    
    return results.reduce((sum,cur)=>sum+=cur, 0)
}