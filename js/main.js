//------------------------1-misol----------------------

// let arr1 = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// let n = arr1.length;

// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//         if (arr1[j] > arr1[j + 1]) {
//             let temp = arr1[j];
//             arr1[j] = arr1[j + 1];
//             arr1[j + 1] = temp;
//         }
//     }
// }

// console.log(arr1);

//------------------------2-misol----------------------

// let arr2 = [1, 6, 9, 5, 8, 10, 15];
// let start = 2;
// let end = 5;
// let sum = 0;

// for (let i = start; i <= end; i++) {
//     sum += arr2[i];
// }

// console.log(sum);

//------------------------3-misol----------------------

// let arr3 = [2, 4, 5, 5, 6, 6, 3, 2, 1];
// let uniqueArr3 = [];
  
// for (let i = 0; i < arr3.length; i++) {
//     if (!uniqueArr3.includes(arr3[i])) {
//         uniqueArr3.push(arr3[i]);
//     }
// }

// console.log(uniqueArr3);

//------------------------4-misol----------------------

// let arr4 = [1, 6, 9, 5, 8, 10, 15];

// let maxVal = arr4.reduce((max, current) => (current > max ? current : max), arr4[0]);

// let minVal = arr4.reduce((min, current) => (current < min ? current : min), arr4[0]);

// console.log(`eng kattasi: ${maxVal}, eng kichigi: ${minVal}`);

//------------------------6-misol----------------------

// let arr6 = [1, 2, 3, 4, 5];
// let reversedArr6 = [];

// for (let i = arr6.length - 1; i >= 0; i--) {
//     reversedArr6.push(arr6[i]);
// }

// console.log(reversedArr6);

//------------------------7-misol----------------------

// const array = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// const oddNumbers = [];
// let count = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//         oddNumbers.push(array[i]);
//         count++;
//     }
// }

// console.log("toq sonlar:", oddNumbers);
// console.log("toq sonlar soni:", count);

//------------------------8-misol----------------------

// const array = [2, 3, 4, 5, 7];
// const oddIndexElements = [];

// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         oddIndexElements.push(array[i]);
//     }
// }

// console.log("toq indexdagi sonlar:", oddIndexElements);

//------------------------11-misol----------------------

// var a = prompt(`sizeni kiriting:`)
// function generateOddNumbers(n) {
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(2 * i + 1);
//     }
//     return result;
// }

// console.log(generateOddNumbers(a));

//------------------------12-misol----------------------

// const array = [22, 3, 5, 6, 3, 2, 3];

// function reverseArray(arr) {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log("arrayni teskarisi:", reverseArray(array));

//------------------------13-misol----------------------

// const array = [ 2, 3, 5, 6, 3, 3];

// const uniqueArray = array.reduce((acc, value) => {
//     if (!acc.includes(value)) {
//         acc.push(value);
//     }
//     return acc;
// }, []);

// console.log(uniqueArray);

//------------------------14-misol----------------------

// const array = [5, 3, 8, 1, 6, 7];

// function minValueAtEvenIndices(array) {
//     let minValue = Infinity;

//     for (let i = 0; i < array.length; i += 2) {
//         if (array[i] < minValue) {
//             minValue = array[i];
//         }
//     }

//     return minValue;
// }

// console.log("Juft indekslardagi eng kichik qiymat:", minValueAtEvenIndices(array));

