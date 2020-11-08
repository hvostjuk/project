'use strict';
let musicBD = [
    {   song: 'aud/DaBro - На Крыше.mp3', poster: 'img/img.jpg'},
    {   song: 'aud/DJ Sasha Born - Атмосфера.mp3', poster: 'img/img2.jpg'},
    {   song: 'aud/Lx24 - Хулиган.mp3', poster: 'img/img3.jpg'},
    {   song: 'aud/Rauf & Faik feat. Niletto - Если Тебе Будет Грустно.mp3', poster: 'img/img4.jpg'},
    {   song: 'aud/Slava Marlow - Снова Я Напиваюсь.mp3', poster: 'img/img5.jpg'},
    {   song: 'aud/StrezzSkills feat. Burito - Ты Далеко.mp3', poster: 'img/img6.jpg'},
    {   song: 'aud/Артур Бабич - Мармеладка.mp3', poster: 'img/img7.jpg'},
    {   song: 'aud/Асия - Мона Лиза.mp3', poster: 'img/img8.jpg'},
    {   song: 'aud/Даня Милохин & Николай Басков - Дико Тусим.mp3', poster: 'img/img9.jpg'}
    ];
let audio = new Audio('aud/DaBro - На Крыше.mp3');
let playAudio = function () {
    let btnPlay = document.querySelector('.left-col__player-play');
    let count = 0;
    btnPlay.addEventListener('click',(e) => {
        if (count === 0) {
            btnPlay.src = 'img/last.png'; //меняю кнопку на pause, но у меня ее нету пока, добавлю потом ;]
            count ++;
            audio.play();
        } else if (count === 1) {
            btnPlay.src = 'img/play.png';
            count --;
            audio.pause();
        }
    });
};
playAudio();

let btnNext = document.querySelector('.left-col__player-next');
let count = 0;
btnNext.addEventListener('click', (e) => {
     count ++;
     console.log(count);
     audio = new Audio(musicBD[count].song);
     audio.play();

});