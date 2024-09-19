const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById("current-progress")

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

/* inicializando a musica */
function initializeSong() {
    cover.src = `/IMAGEM/${playlist[index].file}.png`;
    song.src = `/songs/${playlist[index].file}.mp3`; 
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}
initializeSong();

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
    isPlaying = false;
} 

function playPauseDecider() {
    if (isPlaying === true) {
      pauseSong();
    } else {
      playSong();
    }
}

function previousSong() {
    if(index === 0){
        index = playlist.length - 1;
    }
    else {
        index -=1;
    }
    initializeSong();
    playSong();
}


function nextSong() {
    if(index === playlist.length - 1) {
        index = 0;
    }
    else {
        index +=1;
    }
    initializeSong();
    playSong();
}

function updateProgressBar(){
    /*song.currentTime
    song.duration*/
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`);
}
initializeSong();

// possivel mudança para depois
play.addEventListener("click", playPauseDecider);
next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);
song.addEventListener('timeupdate', updateProgressBar);