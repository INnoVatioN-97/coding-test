function solution(s){

    
    
    const strings = s.split('');
    const {p, y} = strings.reduce((sum,cur)=>{
        if(cur.toLowerCase() === 'p') sum.p++;
        if(cur.toLowerCase() === 'y') sum.y++;
        return sum
    },{p:0,y:0})

    return p===y;
}