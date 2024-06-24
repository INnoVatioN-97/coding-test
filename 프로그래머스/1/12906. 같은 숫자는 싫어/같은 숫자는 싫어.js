function solution(arr)
{
    const result = []
    let prevVal = -1
    arr.forEach((el)=>{
        if(prevVal === -1){
            result.push(el)
            prevVal = el
        }
        else if(prevVal !== el){
            result.push(el)
            prevVal = el
        }
    })
    
    return result
}