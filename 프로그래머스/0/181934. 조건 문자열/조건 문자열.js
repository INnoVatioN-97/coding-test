// n ineq m eq 
function solution(ineq, eq, n, m) {
    if(ineq === '<'){
        if(eq === '='){
           return m - n >= 0 ? 1 : 0
        }else{
            return m - n > 0 ? 1 : 0
        }
    }
    if(ineq === '>'){
        if(eq === '='){
           return n - m >= 0 ? 1 : 0
        }else{
            return n - m > 0 ? 1 : 0
        }
    }
    
}