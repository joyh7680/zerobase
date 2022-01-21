const n = 18;

const isMultipleOfThree  = n % 3 === 0;
const isMultipleOfFive  = n % 5 === 0;

if (isMultipleOfThree && isMultipleOfFive){
    console.log('15의 배수');

}else {
    if (isMultipleOfThree){
        console.log('3의 배수');
    }else if (isMultipleOfFive){
        console.log('5의 배수');

    }
}