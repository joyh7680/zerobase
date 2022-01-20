// for of 

for ( const i of [1,2,3]) {
    console.log(i);
}


// for in 

Object.prototype.test = function(){};

for (const i in {a : 1, b : 2 , c: 3 }) {
    console.log(i);
}

// 결과 : a b c test 
//  a, b. c 이렇게 만 나오는게 아니라 test 문자도 같이 나올 수 있음 쓸때 주의 
