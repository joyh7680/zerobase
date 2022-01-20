// function hello(){}
// 함수를 만들 떄 사용하는 키워드 

//function
// 이름이 hello1 인 함수를 선언 

function hello1() {
    console.log('hello1');
}
console.log(hello1, typeof hello1);
// 결과가 [function: hello1] 'function' 으로 나와야되는데 

//함수의 매개변수
// 함수를 호출할 때 값을 지정
function hello2(name){
    console.log('hellow2', name);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 길 
function hello3(name){
    return 'hello3 ${name}';
}
console.log(hello3('mark'));
// 결과 ; hello3 mark 


