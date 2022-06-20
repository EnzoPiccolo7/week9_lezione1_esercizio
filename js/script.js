"use strict";
let bott = document.querySelector('#bottone');
let utente1 = document.querySelector('#utente1');
let utente2 = document.querySelector('#utente2');
bott.addEventListener('click', invia);
function invia() {
    let random = (Math.random() * (100 - 1) + 1);
    let intero = Math.floor(random)
    document.querySelector('#risultato').innerHTML = intero;
    let array1 = new Array(utente1.value, utente2.value);
        if (intero == array1[0]) {
            console.log(intero + ' il giocatore 1 ha indovinato, il giocatore 2 ha perso');
            document.querySelector('.risultato').innerHTML = ' il giocatore 1 ha indovinato, il giocatore 2 ha perso';
        }
        else if (intero < array1[0]) {
            console.log(intero + ' il giocatore 1 e 2 non hanno indovinato ma il giocatore 1 ci è andato vicino');
            document.querySelector('.risultato').innerHTML = ' il giocatore 1 e 2 non hanno indovinato ma il giocatore 1 ci è andato vicino';
        }
        else if (intero < array1[1]) {
            console.log(intero + ' il giocatore 1 e 2 non hanno indovinato ma il giocatore 2 ci è andato vicino');
            document.querySelector('.risultato').innerHTML = ' il giocatore 1 e 2 non hanno indovinato ma il giocatore 2 ci è andato vicino';
        }
        else if (intero == array1[1]) {
            console.log(i + ' il giocatore 2 ha indovinato, il giocatore 1 ha perso');
            document.querySelector('.risultato').innerHTML = ' il giocatore 2 ha indovinato, il giocatore 1 ha perso';
        }
    }

