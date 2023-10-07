"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arrayNew = [];
randomArray(arrayNew, 9, 9); 
console.log(arrayNew); 
console.log(`Сумма ${summArray(arrayNew)}`); 
console.log(`Минимальное число ${minArrayNumber(arrayNew)}`); 
findIndexInArray(arrayNew); 
console.log(`Число ${findIndexInArray(arrayNew)} лежит в массиве под индексами`) 
console.log(findIndexInArray(arrayNew)); 
 
function randomArray(arrayNew, len, range) { 
    for (let i = 0; i < len; i++) { 
        arrayNew.push(Math.round(Math.random() * range)); 
    } 
} 
 
function summArray(arrayNew) { 
    return arrayNew.reduce((acc, el) => acc + el, 0); 
} 
 
function minArrayNumber(arrayNew) { 
    return Math.min(...arrayNew); 
} 
 
function findIndexInArray(arrayNew) { 
    const arrayIndex = []; 
    for (let i = 0; i < arrayNew.length; i++) { 
        if (arrayNew[i] === 3) { 
            arrayIndex.push(i); 
        } continue; 
    } return arrayIndex; 
}
