function solution(phone_number) {

    return new Array(phone_number.length-4).fill(0).map(el=>'*').join('')+phone_number.slice(phone_number.length-4,phone_number.length);
}