function printTriangle(num) {
    return num < 1 ? '' : printTriangle(num - 1) + '*'.repeat(num) + '\n';
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log(printTriangle(2));
  console.log(printTriangle(10));
