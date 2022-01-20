// 표현식 && 표현식
// and 연산자 &&   

if (true && true){
    console.log('두개 모두 참이면 참');
}
// 둘다 true인데 and 연산자이면 참 

if (true && false){
    console.log('한개만 참이면 거짓 ');
}
// 하나가 트루이고 하나가 false이면 
// 전체결과는 거짓이다

if (false && false){
    console.log('두개가 모두 거짓이면 거짓');
}


// 표현식 ㅣㅣ 
// or 의 연산자 
if (true || true){
    console.log('두개 모두 참이면 참');
}
if (true || false){
    console.log('한개만 참이면 참');
}
// -> 참 
if (false || true){
    console.log('한개만 참이면 참');
}
if (false || false){
    console.log('두개가 모두 거짓이면 거짓');
}

// ! 표현식 

if (!true) {
    console.log('참이면 거짓');
}
if (!false) {
    console.log('거짓이면 참');
}


