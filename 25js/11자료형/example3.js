// null 

const a = null;

console.log(a, typeof a);

// null object 
// null: 값이 없다라고 하는 object 
// null : 값을 가지고 있지만 비어있음 


// undefiend

let b;
console.log(b, typeof b);
// 결과 : undefined 
// 아무갓ㅂ도 안나옴. 정해지지 않음 

b = undefined;

console.log(b, typeof b);

if ( a == b) {
    console.log(a == b);
}
// 결과 ㅣ true 
// 둘다 값이 없기때문에 서로 같으니까 

if (a === b) {
    // === : 값 뿐만아니라 타입까지 비교 
    console.log(a === b);
}