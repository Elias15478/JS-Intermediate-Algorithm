//create an array of numbers
//loop it between i=0 and i less than array length
//conditional statement,array[i] is less than zero(negative)
//Boolean = true, remove the negative number from the array

let array = [1,-2,4,1];
for (let i=0; i<array.length; i++){
    if(array[i]<0) {
        array.splice(i,1);
    }
}
console.log(array);