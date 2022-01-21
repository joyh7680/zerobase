const a = 'a';

//상수 a는 a 다 
if (a === 'a'){
    console.log(a);
}

// 만약 a 가 a 라면 콘솔값은 a 다 ㅇㅇ 
// a 

{
    var foo = 'foo';
    console.log(foo);
}

// 변수 foo 가 foo ; 콘솔확인 : foo 

console.log(foo);

// 가로 밖에서 도 확인
// foo 


function bar(){
    var baz = 'baz';
    console.log(baz);
    console.log(foo);
}

bar();

// bar 는

// baz 는 baz 
// 머야 이게 