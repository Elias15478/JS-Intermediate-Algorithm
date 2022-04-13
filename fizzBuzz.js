//loop i from 1 up to 135
//if the number is multiple of 3 and 5 replace it by FizzBuzz
//if the number is multiple of 3 but not multiple of 5 replace with Fizz
//if the number is multiple of 5 but not multiple of 3 replace with Buzz
//if the number is not multiple of 3 or 5 return the number it self 

for (let i = 1; i < 136; i++) {
    if (i%3===0 & i%5===0) {
        console.log("FizzBuzz");
    } else if (i%3===0) {
        console.log("Fizz");
    } else if (i%5===0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
