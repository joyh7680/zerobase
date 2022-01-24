class Parent {
    name = 'lee';

    hello(){
        console.log('hello', this.name);
    }
}
  
  class Child extends Parent {}

  const c = new Child();
  const p = new Parent();
  console.log(p, c);  //Parent {name: 'lee'} Child {name: 'lee'}

//   child는 parent 를 상속받고 있

//   class child extends parent 
// 확장하는 

console.hello();
console.name = 'anna';
console.hello();

