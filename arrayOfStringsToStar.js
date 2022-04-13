//create array of strings
//loop it
//find a string at arr[i]
//replace all the charachters of it by *

let X = ['Man', 'I','Love','The','Matrix','Program'];
for (let i = 0; i < X.length; i++) {
    const str = X[5];
    var newStr = str.replace(/./g, '*');
}console.log(newStr);
