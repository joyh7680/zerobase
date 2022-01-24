function printTriangle(num) {
    // return num < 1 ? '' : printTriangle(num - 1) + '*'.repeat(num) + '\n';
    return num < 1 ? '' : printTriangle(num - 1) + '*'.repeat(num) + '\n';
  }
  
  console.log(printTriangle(2));
  console.log(printTriangle(10));

  num 이 1보다 작다면 " 빈카값 호출하고" : 
