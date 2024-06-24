function solution(array) {
    
    const frequencies = new Map()
    
    array.forEach(el=>{
        const exists = frequencies.has(el)
        if(!exists){
            frequencies.set(el, 1)
        }else{
            frequencies.set(el, frequencies.get(el)+1)
        }
    })
    
    const converted = Array.from(frequencies, ([name,count])=>({
     name,count   
    })).sort((a,b)=>b.count-a.count)
    
    const maxCount = converted[0].count
    
    return converted.filter(el=>el.count===maxCount).length>1 ? -1 : Number(converted[0].name)
    
//     const frequencies = array.reduce((sum,cur)=>{
//         if(!sum[`${cur}`]) sum[`${cur}`]=1
//         else sum[`${cur}`] = sum[`${cur}`]+1
        
//         return sum
//     },{})
    
//     const keys = Object.keys(frequencies)
//     let maximum=0;
    
    
//     keys.forEach(el=>{
//         let current = frequencies[`${el}`]
//         if(maximum<current) maximum = current
//     })
    
    
//     const maxKeys = keys.filter(el=>frequencies[`${el}`] === maximum)
    
//     return maxKeys.length >1 ? -1 : Number(maximum)
}