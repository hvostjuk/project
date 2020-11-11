const musicBD = [
    { song: 'aud/DaBro - На Крыше.mp3', poster: 'img/img.jpg', truckName: 'На Крыше', group: 'DaBro'},
    { song: 'aud/DJ Sasha Born - Атмосфера.mp3', poster: 'img/img2.jpg', truckName: 'Атмосфера', group: 'DJ Sasha Born'},
    { song: 'aud/Lx24 - Хулиган.mp3', poster: 'img/img3.jpg', truckName: 'Хулиган', group: 'Lx24'},
    { song: 'aud/Rauf & Faik feat. Niletto - Если Тебе Будет Грустно.mp3', poster: 'img/img4.jpg', truckName: 'Если Тебе Будет Грустно', group: 'Rauf & Faik feat. Niletto'},
    { song: 'aud/Slava Marlow - Снова Я Напиваюсь.mp3', poster: 'img/img5.jpg', truckName: 'Снова Я Напиваюсь', group: 'Slava Marlow'},
    { song: 'aud/StrezzSkills feat. Burito - Ты Далеко.mp3', poster: 'img/img6.jpg', truckName: 'Ты Далеко', group: 'StrezzSkills feat. Burito'},
    { song: 'aud/Артур Бабич - Мармеладка.mp3', poster: 'img/img7.jpg', truckName: 'Мармеладка', group: 'Артур Бабич'}, { song: 'aud/Асия - Мона Лиза.mp3', poster: 'img/img8.jpg', truckName: 'Мона Лиза', group: 'Асия'},
    { song: 'aud/Даня Милохин & Николай Басков - Дико Тусим.mp3', poster: 'img/img9.jpg', truckName: 'Дико Тусим', group: 'Даня Милохин & Николай Басков'}
];
let truckNumber = 0;
const audio = new Audio(musicBD[truckNumber].song);
const btnNext = document.getElementById('next');
const btnPlay = document.getElementById('play');
const btnLast = document.getElementById('last');
const poster =  document.getElementById('poster');
const truckName = document.getElementById('track_name');
const truckArtist = document.getElementById('track_group');
const timeMusicElement = document.getElementById('all-time');
const timeMusicCurrent = document.getElementById('current-time');
const progressMusic = document.getElementById('progress');
let currentTime;
let startMusic;
let timeMusicSec;
let timeMusicMinute;
const timerMusicStart = function () {
  startMusic = Date.now();
};

ыconst getCurrentTime = function () {
    let interval = setInterval(function (){
        let timerEnd = Date.now();
        currentTime = Math.round((timerEnd - startMusic) / 1000);
        if (currentTime < 10) {
            timeMusicCurrent.textContent =`0.0${currentTime}`;
        } else if(currentTime < 60) {
            timeMusicCurrent.textContent =`0.${currentTime}`;
        } else if (currentTime === 60) {
            timeMusicCurrent.textContent = '1.00'
        } else {
            let currentTimeMinutes = Math.round(currentTime / 60);
            let currentTimeSec = currentTime % 60;
            timeMusicCurrent.textContent = `${currentTimeMinutes}.0${currentTimeSec}`
        }
        }, 1000);
};

let playMusic = () => {
    audio.play();
    if (audio.play) {
        btnPlay.src = 'img/pause.png';
        musicProgress(timeMusicSec);
        timerMusicStart();
    } else {
        btnPlay.src = 'img/play.png';
    }
};
audio.onloadeddata = () => {
    timeMusicSec = audio.duration;
    getTimeMinute();
    timeMusicElement.textContent = timeMusicMinute;
};
const getTimeMinute = () => {
  timeMusicMinute = Math.floor((timeMusicSec * 100) / 60) / 100;
};
const changeToNextTruck = () => {
    audio.src = musicBD[truckNumber].song;
    poster.src = musicBD[truckNumber].poster;
    truckName.textContent = musicBD[truckNumber].truckName;
    truckArtist.textContent = musicBD[truckNumber].group;
}; // Правильно ли так делать, чтобы сократить код?
const musicProgress = function (time) {
    let start = 0;
    let t = Math.round(time * 1000 / 100);
        let intervalId = setInterval(function (){
        if (start >= 100) {
            clearInterval(intervalId);
        } else {
            progressMusic.value = start;
        }
        start++;
    },t);
};

btnPlay.addEventListener('click',(e) => {
    if (audio.paused){
        playMusic();
    } else {
        btnPlay.src = 'img/play.png';
        audio.pause();
    }
});
btnNext.addEventListener('click', (e) => {
    if (truckNumber >= musicBD.length - 1) {
        truckNumber = 0;
        changeToNextTruck();
        } else {
        truckNumber++;
        changeToNextTruck();
    }
    playMusic();
});
btnLast.addEventListener('click', (e) => {
    if (truckNumber <= 0) {
        truckNumber = musicBD.length - 1;
        changeToNextTruck();
    } else {
        truckNumber --;
        changeToNextTruck();
    }
    playMusic();
});
