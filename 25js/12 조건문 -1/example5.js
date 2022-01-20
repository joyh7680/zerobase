// if () {} else if () {} else {}

const n = 15;

if (n % 3 === 0) {
    // n을 3으로 나누어떨어진 몫 이 0 이라면    = 3으로 나누어 떨어진다는 의미 = 3으로 나눠진다면 
    console.log('n은 3의 배수입니다');
} else if (n % 5 === 0 ){
    console.log('n은 5의 배수 입니다');
} else {
    console.log ('n은 3의 배수도 아니고, 5의 배수도 아닙니다.')
}

// n이 3의 배수이면서, 5의 배수이면 뭐라고 출력될까요 ?



if ( n % 3 === 0 && n % 5 === 0) {
    console.log('n은 15의 배수입니다.');
} else if (n % 3 === 0) {
    console.log('n은 3의 배수입니다 ');
} else if ( n % 5 === 0) {
    console.log ('n은 5의 배수입니다');
} else {
    console.log ('n은 3의 배수도 아니고, 5의 배수도 아닙니다.')
}

// n % 3 === 0과 n % 5 === 0의 값은 여러번 반복되므로, 변수나 상수에 넣습니다.
// 위에랑 똑같음 

const multipleOfThree = ( n % 3 === 0);
const multipleOfFive = ( n % 5 === 0);
// 하나의 불린형을 평가하는 방식 
if (  multipleOfThree === 0 && multipleOfFive === 0) {
    console.log('n은 15의 배수입니다.');
} else if ( multipleOfThree === 0) {
    console.log('n은 3의 배수입니다 ');
} else if ( multipleOfFive === 0) {
    console.log ('n은 5의 배수입니다');
} else {
    console.log ('n은 3의 배수도 아니고, 5의 배수도 아닙니다.')
}




// 중첩을 이용해서 표현할 수도 있습니다. 