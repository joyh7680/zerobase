//string

const a ='mark';

console.log(a, typeof a);
// 결과 mark string


const b = "mark";

console.log(b, typeof b);
// 결과 mark string , 따옴표 상관없음 


const c = "mark" + 'lee';

console.log(c, typeof c);
// 결과 marklee string


const d = a + 'lee';

console.log(d, typeof d);
// 결과 marklee string


// 자주 쓰임  js 문법 
const e = `${a} lee`;

console.log(e, typeof e);
// 결과 mark lee string