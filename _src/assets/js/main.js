'use strict';

//coger elemento contador html
let accPlace = document.querySelector('.accountant');
//coger elemento submit html
const button = document.querySelector('.button');
//coger elemento input number html
let inputEl = document.getElementById('number');
//coger elemento clue html
const clue = document.querySelector('.clue');


//poner el contador a 0
let acc = 0;

//FUNCION NUMERO ALEATORIO
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
 }

//GENERAR NUMERO ALEATORIO Y MOSTRAR EN CONSOLA
const randomNumber = getRandomNumber(100);
console.log('> ' + randomNumber);


//sumar al contador 1 a cada vuelta
function addAcc(){
    acc = acc + 1;
    accPlace.innerHTML = acc;
}

//handler
function handlerClick(){
    //ejecutar contador + 1
    addAcc();
    const choosenNumber = parseInt(inputEl.value);
    // if (choosenNumber < randomNumber ) {
    //     clue.innerHTML = 'demasiado bajo';
    // } else if (choosenNumber > randomNumber ) {
    //     clue.innerHTML = 'demasiado alto';
    // } else {
    //     clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
    // }

    if (choosenNumber === randomNumber ) {
        clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (choosenNumber > randomNumber ) {
        clue.innerHTML = 'demasiado alto';
    } else {
        clue.innerHTML = 'demasiado bajo';
    }
}

//listener
button.addEventListener('click', handlerClick);