//초기화 하면서 선언된 변수를 중괄호 안 반복 블럭에서 사용할 수 있습니다.

for (let i = 0; i < 5; i ++ ){
    console.log('안녕하세요', i);
}

for (let i = 0, j = 5; i < 5; i++ ){
    console.log('안녕하세요', i, j);
}

for (let i = 0, j = 2; i < 5; i++ , j = j * j ){
    console.log('안녕하세요', i, j);
}

// 반복문을 즉시 종료하고 싶을때는 반복된느 블럭안에서 break ; 를 실행하면 가능

for (let i = 0; i < 5; i++) {
    console.log(i);
    if ( i > 2) {
        break;
    }
    console.log('안녕하세요',i);
}

