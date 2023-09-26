"use strict";

let numeric = Number.parseInt(prompt('Введите число от 0 до 999: '));

if (numeric <= 0 || numeric > 999) {
    console.log('Неверное значение');
} else {
    console.log(`В числе ${numeric} количество сотен: ${Math.trunc(numeric % 1000 / 100)}, десятков: ${Math.trunc(numeric % 1000 / 10)}, единиц: ${Math.trunc(numeric % 1000 / 1)}`);
}