const a = Symbol();
const b = Symbol(37);
const c = Symbol('mark');
const d = Symbol('mark');

// c와 d는 다른거임 

// symbol 고유한 걸 만들고 싶을 때 

console.log(a, typeof a);
console.log(c === d);

// 결과 Symbol() symbol
// false

new Symbol();
// 결과 Uncaught TypeError: Symbol is not a constructor 

// Symbol 은 항상 new 로 만드는게 아님 
// 만들어진 Symbol은 고유한 것을 의미 