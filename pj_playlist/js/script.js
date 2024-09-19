const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

//seção de variáveis auxiliares para o meu código
const enemy = {
    songName: "Enemy",
    file: "Enemy_Imagine_dragons",
    artist: "Imagine dragons",
};

const sharks = {
    songName: "Sharks",
    file: "sharks_imagine_dragons",
    artist: "Imagine dragons",
};

let isPlaying = false;
const playlist = [enemy, sharks];
let index = 0;

function initializeSong() {
    cover.src = `/IMAGEM/${playlist[currentSong].file}.png`;
    songName.innerText = playlist[currentSong].songName;
    bandName.innerText = playlist[currentSong].artist;
    song.src = `/songs/${playlist[currentSong].file}.mp3`; 
}

initializeSong();

function previousSong() {
    if(index === 0){
        index = playlist.length - 1;
    }
    else {
        index -=1;
    }
}
initializeSong();
playSong();

function nextSong() {
    if(index === playlist.length - 1;) {
        index = 0;
    }
    else {
        index +=1;
    }
}
initializeSong();
playSong();






/*
songName.innerText = 'Enemy - Imagine dragons';
//let isPlaying = false;

function playSong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
   // isPlaying = false;
}

 play.addEventListener("click", playSong); <---- cod retirado  

function playPauseDecider() {
    if (isPlaying === true) {
      pauseSong();
    } else {
      playSong();
    }
}*/