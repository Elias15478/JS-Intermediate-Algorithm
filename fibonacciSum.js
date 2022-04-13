//Create an array of two numbers(0,1)
//instantiate the sum with a sum this two numbers
//for loop with index start at 2 and ends at 100000
//array[i]=array[i-2]+array[i-1]
//condtional statement, array[i] <1000000
//boolean = true,increament sum by array[i]

let fibonacci =[0,1];
let sum =1;
for (let i = 2; i < 1000000; i++) {
    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    if(fibonacci[i] < 1000000){
        sum +=fibonacci[i];
    }
}
console.log(fibonacci);
console.log(sum);