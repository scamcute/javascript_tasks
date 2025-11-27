// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let value = Number(prompt(`Введіть  число ${i + 1}:`));
//     arr.push(value);
// }
// let res_arr = [];
// for ( let elem of arr) {
//     if(elem > 0.5 && elem < 3) {
//     res_arr.push(elem);

// }
//     }
// console.log(res_arr);
//  let max = 0;
//  for(let elem of res_arr) {
//     if(elem >= max) {
//         max = elem;
     

//     }
//  }
//  console.log(max);













// let initialDeposit = 1000;
// let months = 8; 
// let K = 5;      
// let rate = 3;

// let deposit = initialDeposit;
// let depositK = initialDeposit;  


// for (let i = 1; i <= months; i++) {
//     let increase = (deposit * rate) / 100;
//     deposit += increase;

//     if (i >= 3) {
//         console.log(`Місяць ${i}: приріст = ${increase.toFixed(2)} грн, сума = ${deposit.toFixed(2)} грн`);
//     }
// }

// for (let i = 1; i <= K; i++) {
//     let increase = (depositK * rate) / 100;
//     depositK += increase;
// }

// console.log(`\nСума вкладу через ${months} місяців: ${deposit.toFixed(2)} грн`);
// console.log(`Сума вкладу через ${K} місяців: ${depositK.toFixed(2)} грн`);












// let n = Number(prompt("Введите n ( < 27):"));
// let K = Number(prompt("Введите K (максимальна довжина числа):"));

// let limit = 1;
// for (let i = 0; i < K; i++) {
//     limit = limit * 10;    
// }

// for (let x = 0; x < limit; x++) {
//     let s = String(x);    
//     let sum = 0;

//     for (let i = 0; i < s.length; i++) {
//         sum = sum + (s[i] - "0");
//     }

//     if (sum === n) {
//         console.log(x);
//     }
// }











// let myNumber = 1234; 

// function swapFirstLastDigit(num) {
//     if (num < 10) return num; 

//     let last = num % 10;
//     let first = num;
//     let digits = 1; 
//     while (first >= 10) {
//         first = Math.floor(first / 10);
//         digits++;
//     }

//     let middle = num - first * Math.pow(10, digits - 1); 
//     middle = Math.floor(middle / 10);                   

//     let newNum = last * Math.pow(10, digits - 1) + middle * 10 + first;
//     return newNum;
// }

// let newNumber = swapFirstLastDigit(myNumber);
// console.log("Вихідне число:", myNumber);
// console.log("Число з перестановкою:", newNumber);






// let num = -10;
// if (num <= 0) {
//     console.log ("YES")
// } else {
//     console.log("NO")
// }

// let str = '1234567890';
// console.log(str.length);

// let str = '123456789';
// console.log(str.length - 0);

// let num = 6;
// if(num % 2 == 0) {
//     console.log("четное")
// } else {
//     console.log("не четное")
// }

// let str = 'fuck';
// let str_one = 'pussy';
// if(str[0] === str_one[0]) {
//     console.log("oh yess")
// } else {
//     console.log("nooo")
// }

// let num = 125;
// let str = String (num);
// console.log(str[0]);

// let num = 12305;
// let str = String (num);
// console.log(String(num).length - 0);

// let num = 15067;
// let str = String(num);
// console.log(Number (str[0]) + Number (str[4]));

// let num = 1709;
// let str = String(num);
// console.log(str.length);

// let num = '23';
// let num_second = '78';
// if(num[0] === num_second[0]) {
//     console.log("киска")
// } else {
//     console.log("блядство")
// }



// let num = 45;
// let num_second = 9;
// if(num % num_second == 0) {
//     console.log(`${num} делиться без остатка на ${num_second}`)
// } else {
//     console.log(`${num} не делиться без остатка на ${num_second} `)
// }


// let str = '12345';
// if (str > '1') {
//     console.log(str.length - 1)
// } else {
//     console.log("error")
// }


let num = 0;