"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const value1 = Number.parseInt(prompt('Введите первое значение'));
const value2 = Number.parseInt(prompt('Введите второе значение'));
const value3 = Number.parseInt(prompt('Введите третье значение'));

const maxValue = (num1, num2, num3) => Math.max(num1, num2, num3);

console.log(maxValue(value1,value2,value3));
