// while (조건) {
//      조건이 거짓이 될 떄까지 반복 실행 
// }

// while 무한 루프 
while (true) {
    console.log('안녕하세요');
    if (Math.random() * 100 > 90) {
        break;
    }
}

// 결과 : 랜덤식으로 안녕하세요가 반복됨 

// do {
//     조건이 거짓이 될때까지 반복 실행 
// }while (조건);

do {
    console.log('안녕하세요');
} while (Math.random() * 100 <= 90);