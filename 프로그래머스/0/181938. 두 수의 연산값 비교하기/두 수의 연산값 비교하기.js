function solution(a, b) {

    
    const conv =  Number(`${a}${b}`)
    const mul = 2 * a*b
    
    
    // console.log({conv, mul, exceptionalCase})
    
    
    if(conv === mul){
        return conv
    }else{
        return conv > mul ? conv : mul
    }
}