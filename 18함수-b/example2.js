// funtion 과 new function() 차이점 


// 2 . 전역변수에서 나올수 있음 
// global = 전역변수 
global.a = 0;
// 값: 0 
// new Function('return a'); 가 global 에있는 a 를 보고 0을 실행하게 됌 

{
    const a = 1;

    const test = new Function('return a');
    // a 를 return 할것이다 
    // 변수 a =1 인 a를 
    console.log(test());

}
// a is not defined

// 1 
// new Function('return a');
// 변수'return a' 가 
// 지역변수  const a = 1; 에 접근이 안됌 


// new Function('return a'); 에서 나온 a 는 어디서 나올수 있냐면 

// 3 
{
    const a = 2;

    // 익명함수 
    const test = function(){
        return a;
        // return a; 의 a 는 global 의 a 를 뜻하지 않고 
        // 바로 상위에 있는  const a = 2; 를 실행하게됌 

    }
    console.log(test());

}
// 값:2 