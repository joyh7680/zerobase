/*
  Q3) Student 클래스를 extends한 FeStudent 클래스를 작성해주세요. (15점)
    dd 
  FeStudent 클래스 constructor는 name(string), major(string)를 입력받아 FeStudent 인스턴스를 생성합니다.
  ㅇㅇ


  FeStudent 인스턴스는 FeStudent 프로토타입으로부터 study 메소드를 상속받습니다.
  study 메소드는 'Let's study (major)!' 텍스트를 출력합니다. 아래 예제를 참고해주세요.

  제한사항: Class 문법만을 사용합니다.
  ex) FeStudent.prototype.study = function () {...}; 사용 X
*/
class Student {
    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(`Hi! My name is ${this.name}.`);
    }
  }

  class FeStudent extends Student {
      constructor(name, major){

          super(name);
          this.major = (major);
          this.study = function() {
              console.log("Let's study", this.major, '!');
          }
      }
      

  }

  

//   FeStudent.prototype.study = f 
  

  
  const feStudent = new FeStudent('Jin', 'Frontend');
  console.log(feStudent); // FeStudent { name: 'Jin', major: 'Frontend' }
   // ㅇㅇ 

  feStudent.sayHi(); // Hi! My name is Jin.
  // ㅇㅇ 
  feStudent.study(); // Let's study Frontend!