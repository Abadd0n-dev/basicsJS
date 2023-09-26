"use strict";

const positive = Number.parseInt(prompt('Введите положительное число: '));
const negative = Number.parseInt(prompt('Введите отрицательное число: '));
if (positive > 0 && negative < 0) {
    console.log('Все значения верные.');
} else {
    console.log('Одно или более значений некорректно.');
}
