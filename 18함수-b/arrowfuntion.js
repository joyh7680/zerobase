// ()=> {}
// arrow function (es6)

// 1 
// arrow 함수를 만들어 이름이 hello1 인 변수에 할당

const hello1 = () => {
    // 매개변수는 똑같이 괄호안에 작성 
    console.log('hello1');
}
// { } 준가로 안에 있는 함수가 const hello1 라는 변수를 만들어주게 됌 
// {} 안에잇는건 항상 익명함수
// 익명함수가 특정변수가 되는것 




// 2 
// 함수의 매개변수
// 함수를 호출할때 값을 지정 
// 매개변수가 하나일떄 괄호 생략가능 

const hello2 = (name) => {
    console.log('hello2', name);
}
            //  = 위아래 똑같음 
const hello2 = name => {
    console.log('hello2', name);
}

const hello3 = (name, age ) => {
    // 매개변수가 하나이상일때에는 무조건 ()해줘야함 
    console.log('hello3', name);
}





// 3 
// 함수의 리턴 
// 함수를 실행하면 얻어지는 값 
const hello4 = name => {
    return 'hello4 ${name}';
}
// 이걸 좀 더 간략하게 쓸 수 있는 방식 이

        //   = 

const hello5 = name => 'hello5 ${name}';


 


