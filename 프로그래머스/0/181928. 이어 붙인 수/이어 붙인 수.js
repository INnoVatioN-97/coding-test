function solution(num_list) {
    const even = Number(num_list.filter(el=>el%2 === 0).map(el=>el).join(''))
    const odd = Number(num_list.filter(el=>el%2 !== 0).map(el=>el).join(''))
    
    return even+odd
}