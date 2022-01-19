//number



const a = 37;
// a 라고하는 변수는 number 라고하는 자료형을 가지게 됌 s

console.log(a, typeof a);
// 결과 : 37 number 


const b = 96.7;

console.log(b, typeof b);
// 96.7 number

const c = NaN;

console.log(c, typeof c);
// NaN number
// 값 : nan type: number 

// 이게 도대체 언제쓰이냐 ? 


// NUMBER라고 하는 함수를 이용해서 문자열로 바꾸기 
const d = Number('Mark');

// 문자열이 형 변환이 되는거 
// 숫자로 변환이 안되는 경우 도 있음 
// nan :  넘버가 숫자가 아니라는 의미를 가지고 있는 숫자 

console.log(d, typeof d);
// 결과 NaN number

// 형변환 
const e = Number('37');
// 문자열로 37이라고 써있는 것을 Number 형으로 바꿔주니까 

console.log(e, typeof e);
// 결과 : 37 number
// 문자열이 아니라 숫자열 


