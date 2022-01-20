// false
// 0
// ''
// null
// undefined
// NaN

if(false) console.log(false);
if(0) console.log(false);
if('') console.log('');
if(null) console.log(null);
if(undefined) console.log(undefined);
if(NaN) console.log(NaN);
// -> 모두 false 로 평가됌 

// true
// 37
// -37
// 'mark'
// {}
// []

if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ('mark') console.log('mark');
if ({}) console.log({});
// {} 빈 객체 
if ([]) console.log([]);
// [] 빈 배열 

// 모둗 다 참으로 평가됌 =  모두 값이 출력됌 