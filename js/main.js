'use strict';
let playAudio = function () {
    let btnPlay = document.querySelector('.left-col__player-play');
    let count = 0;
    btnPlay.addEventListener('click',(e) => {
        if (count === 0) {
            btnPlay.src = 'img/last.png'; //меняю кнопку на pause, но у меня ее нету пока, добавлю потом ;]
            count ++;
        } else if (count === 1) {
            btnPlay.src = 'img/play.png';
            count --;
        }
    });
};

playAudio();