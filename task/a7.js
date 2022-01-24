/*
  Q1) 숫자 n을 입력받아 n이 짝수이면 true, 홀수이면 false를 "반환"하는 isEvenNumber 함수를 완성해주세요. (5점)
  제한사항: n은 1이상의 양수입니다.
*/

  function isEvenNumber(n) {
    // do something
    if (n % 2 === 0 && n >= 1) {
      return "true";
    } else {
      return "false";
    }
  }
  console.log(isEvenNumber(9)); // false
  console.log(isEvenNumber(2345422)); // true



// Q2) name(string), age(number)를 입력받아 person 인스턴스를 생성하는 Person 생성자 함수를 완성해주세요. (5점)
  function Person(name, age) {
      // do something
    this.name = name;
    this.age = age;
  }

  const person = new Person('홍길동', 999);
  console.log(person);       // Person { name: '홍길동', age: 999 }


