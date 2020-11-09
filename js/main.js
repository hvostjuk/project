'use strict';
let musicBD = [
    {   song: 'aud/DaBro - На Крыше.mp3', poster: 'img/img.jpg', truckName: 'На Крыше', group: 'DaBro'},
    {   song: 'aud/DJ Sasha Born - Атмосфера.mp3', poster: 'img/img2.jpg', truckName: 'Атмосфера', group: 'DJ Sasha Born'},
    {   song: 'aud/Lx24 - Хулиган.mp3', poster: 'img/img3.jpg', truckName: 'Хулиган', group: 'Lx24'},
    {   song: 'aud/Rauf & Faik feat. Niletto - Если Тебе Будет Грустно.mp3', poster: 'img/img4.jpg', truckName: 'Если Тебе Будет Грустно', group: 'Rauf & Faik feat. Niletto'},
    {   song: 'aud/Slava Marlow - Снова Я Напиваюсь.mp3', poster: 'img/img5.jpg', truckName: 'Снова Я Напиваюсь', group: 'Slava Marlow'},
    {   song: 'aud/StrezzSkills feat. Burito - Ты Далеко.mp3', poster: 'img/img6.jpg', truckName: 'Ты Далеко', group: 'StrezzSkills feat. Burito'},
    {   song: 'aud/Артур Бабич - Мармеладка.mp3', poster: 'img/img7.jpg', truckName: 'Мармеладка', group: 'Артур Бабич'},
    {   song: 'aud/Асия - Мона Лиза.mp3', poster: 'img/img8.jpg', truckName: 'Мона Лиза', group: 'Асия'},
    {   song: 'aud/Даня Милохин & Николай Басков - Дико Тусим.mp3', poster: 'img/img9.jpg', truckName: 'Дико Тусим', group: 'Даня Милохин & Николай Басков'}
    ];
let audio = new Audio('aud/DaBro - На Крыше.mp3');
let btnNext = document.querySelector('.left-col__player-next');
let btnPlay = document.querySelector('.left-col__player-play');
let btnLast = document.querySelector('.left-col__player-last');
let poster = document.querySelector('.left-col__img');
let truckName = document.querySelector('.left-col__track-name');
let truckArtist = document.querySelector('.left-col__track-group');
let truckNumber = 0;
let playMusic = function () {
    audio.play();
};
let pauseMusic = function () {
    audio.pause();
};
let changeBtnPlayMusic = function () {
    btnPlay.src = 'img/play.png'
};
let count = 0;

btnPlay.addEventListener('click',(e) => {
    btnPlay.src = 'img/last.png';
    playMusic();
});
btnNext.addEventListener('click', (e) => {
    if (truckNumber >= 8) {
        changeBtnPlayMusic();
        pauseMusic();
        audio = new Audio(musicBD[8].song);
        poster.src = musicBD[8].poster;
        truckName.textContent = musicBD[8].truckName;
        truckArtist.textContent = musicBD[8].group;
    } else {
        changeBtnPlayMusic();
        pauseMusic();
        truckNumber ++;
        audio = new Audio(musicBD[truckNumber].song);
        poster.src = musicBD[truckNumber].poster;
        truckName.textContent = musicBD[truckNumber].truckName;
        truckArtist.textContent = musicBD[truckNumber].group;
    }
});
btnLast.addEventListener('click', (e) => {
    if (truckNumber <= 0) {
        changeBtnPlayMusic();
        pauseMusic();
        audio = new Audio(musicBD[0].song);
        poster.src = musicBD[0].poster;
        truckName.textContent = musicBD[0].truckName;
        truckArtist.textContent = musicBD[0].group;
    } else {
        changeBtnPlayMusic();
        pauseMusic();
        truckNumber --;
        audio = new Audio(musicBD[truckNumber].song);
        poster.src = musicBD[truckNumber].poster;
        truckName.textContent = musicBD[truckNumber].truckName;
        truckArtist.textContent = musicBD[truckNumber].group;
    }
    console.log(truckNumber);
});

