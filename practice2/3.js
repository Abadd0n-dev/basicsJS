"use strict";

const dayNumber = Number.parseInt(prompt('Введите целое число в интервале от 1 до 32: '));
if (dayNumber < 1  || dayNumber >= 32) {
    console.log('Неверное значение');
} else {
    if (dayNumber >= 1 && dayNumber < 11) {
        console.log('Первая декада');
    } else if (dayNumber >= 11 && dayNumber < 21) {
        console.log('Вторая декада');
    } else {
        console.log('Третья декада');
    }
}