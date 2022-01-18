//var 함수 스코프

// var = 변수 선언 방식 
// 2. 블럭 바깥에서 선언된 변수는 블럭 안에서 알수있기 때문에 값이 제대로 나옴  
var a = 0;

// 즉시실행 함수 
// (function(){

// })();

// 1. 즉시실행함수가 block 이라고 생각을 해보면 
(function(){
    a++;
    console.log(a);
})();

// 0. console 로 변수 값 확인 
console.log(a);



// 3. 반대로 할 경우  안-> 바깥 
// var b는 함수 안에서 유효한 범위내의 값을 가지기 때문에 함수를 벗어나게 되면 값을 모르게됨 

(function(){
    var b =0;
    console.log(b);
})();

b++;
// console 로 b 값 출력해보기 
console.log(b);


