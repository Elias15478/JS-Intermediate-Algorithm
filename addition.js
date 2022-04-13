/*Add all the values between 200 and 2700 (inclusively) 
that are divisible by 3 or 5, but not both 3 and 5*/
//instantiate sum
//for loop 
//conditional statement,that are divisible by 3 or 5, but not both 3 and 5
//if boolean is true, increment by i

let sum = 0;
for (let i = 200; i < 2701; i++) {
    if ((i%3===0 & i%5!=0) || (i%5===0 & i%3!=0)) {
        sum += i;
    }
}
console.log(sum);