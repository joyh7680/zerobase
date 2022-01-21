// const heloo = new Function();
// 생성자 함수로 함수를 만드는 방법 

//new function( 인자1, 인자2, ..., 함수의 바디);

// new Function('a', 'b','c','return a + b + c');
// ( a,b,c ,,  return ㅇ해서 abc 값을 다 합칠 수 있 )


// console.log(sum(1,2,3)); 
// 가 만약에 위에 있다면 
// sum is not defined 

const sum = new Function('a', 'b','c','return a + b + c');

console.log(sum(1,2,3));
// 6 