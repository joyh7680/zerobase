//boolean


const isTrue = true;

// isTrue 라는 변수는 true 라는 값을 가지고 있고 Boolean 이라는 타입을 가지게됌 
const isFalse = false;

// 변수타입 확인 : typeof 


console.log(isTrue, typeof isTrue);
// isTrue 의 변수타입 확인 
console.log(isFalse, typeof isFalse);
// isFalse의 변수타입 확인 

// false boolean 
// 값 , 타입종류  가 결과로 나옴 


// 이렇게 사용하진 않지만 쓸 수는 있음 
const a = new Boolean(false);

console.log(a, typeof a)
// Boolean (false) object
// Boolean이라는 생성자 함수
//  그 값이  FLASE를 가지고 있고
// 타입 :  object


// 이렇게 사용하지 않는 이유 ? 
if(a){

    // a는 조건문안에서 평가될때 true 로 평가됌 
    // 그래서 조건문 안이 실행됌 
    console.log('false?');
}

// 함수 실행 
const b = Boolean(false);

console.log(b, typeof b);

if (b) {
    console.log('false?');
}
// 값이 생성되지 않음 new Boolean x 
