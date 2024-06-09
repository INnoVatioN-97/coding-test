function solution(my_string, k) {
    return new Array(k).fill(0).map(el=>my_string).join('');
}