// 선언적 function 과 익명 함수를 만들어 변수에 할당
// 차이점 

// function hello1(){
//     console.log('hello1');
// }

// hello1();

// 결과 ㅣ: hello1 

console.log(hello2);
// 함수가 아니라고 판단되어서 undefined 라고 뜸 

hello1();
hello2();
hello3();
// 결과 : Uncaught TypeError: hello2 is not a function

function hello1(){
    console.log('hello1');
}
// 문제없이 똑같이
// 결과 ㅣ: hello1 

 var hello2 = function(){
     console.log('hello2');
 }

 const hello3 = function(){
     console.log('hello3');
 }