"use strict";

const getCelsius = prompt('Введите температуру в градусах Цельсия: ');
let convertFahrenheit = (9 / 5) * getCelsius + 32;

alert(`Цельсий: ${getCelsius}, Фаренгейт: ${convertFahrenheit}`);