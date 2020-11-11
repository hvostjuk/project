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
const audio = new Audio(musicBD[0].song);
const btnNext = document.getElementById('next');
const btnPlay = document.getElementById('play');
const btnLast = document.getElementById('last');
const poster = document.getElementById('poster');
const truckName = document.getElementById('track_name');
const truckArtist = document.getElementById('track_group');
let truckNumber = 0; // Не смог понять почему надо писать переменную в верхнем регистре(она у меня не константа)
let count = 0;

let playMusic = () => audio.play();

let pauseMusic  =  () => audio.pause();

let changeBtnPlayMusic = () => btnPlay.src = btnPlay.src = 'img/pause.png';

let changeToNextTruck = () => {
    audio.src = musicBD[truckNumber].song;
    poster.src = musicBD[truckNumber].poster;
    truckName.textContent = musicBD[truckNumber].truckName;
    truckArtist.textContent = musicBD[truckNumber].group;
}; // Правильно ли так делать, чтобы сократить код?

btnPlay.addEventListener('click',(e) => {
    count++
    if (count % 2 == 0) {
        changeBtnPlayMusic();
        playMusic();
    } else {
        btnPlay.src = 'img/play.png';
        pauseMusic();
    };
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
    changeBtnPlayMusic();
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
    changeBtnPlayMusic();
});



