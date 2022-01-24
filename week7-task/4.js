/*
  Q4) 숫자 n을 입력받아 삼각형 모양의 문자를 "출력"하는 printTriangle 함수를 완성해주세요. (15점)
  제한사항: n은 2이상, 10 이하의 양수입니다.

  n = 2일 때 아래와 같이 출력
  *
  **

  n = 10일 때 아래와 같이 출력
  *
  **
  ***
  ****
  *****
  ******
  *******
  ********
  *********
  **********
*/

// function printTriangle(num) {
//     let answer = '';
//     for (let i = 1; i <= num; i++) answer += '*'.repeat(i) + '\n';
//     return answer;
//   }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
//   console.log(printTriangle(3));


// def printTriangle(num):
//     for i in range(num+1):
//         print('*' * i)


function printTriangle(n) {
    return (n < 1) ? '' : printTriangle(n - 1) + '*'.repeat(n) + '\n';
  }

  
  printTriangle(2);
  printTriangle(10);