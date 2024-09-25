// Criando as variveis que são atribuidas com uma função que pega o id referente a um elemento da playlist presente nele
const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const likeButton = document.getElementById('like');
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById('repeat');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');


//seção de variáveis auxiliares para o meu código
const Enemy = {
    songName: "Enemy",
    file: "Enemy_Imagine_Dragons",
    artist: "Imagine Dragons",
    liked: false,
};
const Sharks = {
    songName: "Sharks",
    file: "sharks_imagine_dragons",
    artist: "Imagine Dragons",
    liked: false,
};
const eyesClosed = {
    songName: "Eyes Closed",
    file: "eyes_closed_imagine_dragons",
    artist: "Imagine Dragons",
    liked: false,
};

const aBanda = {
    songName: "A Banda",
    file: "A_banda_chico_buarque",
    artist: "Chico Buarque",
    liked: false,
};

const Contrucao = {
    songName: "Construção",
    file: "Construcao_chico_buarque",
    artist: "Chico Buarque",
    liked: false,
};

const Valsinha = {
    songName: "Valsinha",
    file: "Valsinha_chico_buarque",
    artist: "Chico Buarque",
    liked: false,
};

const RapdoMinecraftTauz = {
    songName: "Rap do Minecraft",
    file: "rap_minecraft_tauz",
    artist: "Tauz",
    liked: false,
};

let isPlaying = false;
let isShuffled = false; // informa se a playlist está embaralhada
let repeatOn = false; // impede q a musica ja comece tocando

try {
    originalplaylist = JSON.parse(localStorage.getItem('playlist')) ?? [Enemy, Sharks, eyesClosed, aBanda, Contrucao, Valsinha, RapdoMinecraftTauz]; // ?? representa o operador de coalescência nula
} catch (error) {
    console.error("Erro ao carregar playlist do localStorage:", error);
    originalplaylist = [Enemy, Sharks, eyesClosed, aBanda, Contrucao, Valsinha, RapdoMinecraftTauz]; // Fallback para a lista padrão
}

//const originalplaylist = JSON.parse(localStorage.getItem('playlist')) ?? [Enemy, Sharks]; // vetor que armazena as musicas // ?? representa o operador de coalescência nula
//const originalplaylist = [Enemy, Sharks];
let sortedPlaylist = [...originalplaylist]; // copia do original que vai ser usado para a ordem aleatoria
let index = 0;

// Responsavel por determinar se o coração de like foi clicado
function likeButtonRender() {
    if (sortedPlaylist[index].liked === true) {
      likeButton.querySelector('.bi').classList.remove('bi-heart');
      likeButton.querySelector('.bi').classList.add('bi-heart-fill');
      likeButton.classList.add('button-active');
    } else {
      likeButton.querySelector('.bi').classList.add('bi-heart');
      likeButton.querySelector('.bi').classList.remove('bi-heart-fill');
      likeButton.classList.remove('button-active');
    }
}

// Responsavel por identificar as musicas que queremos e trazer elas
function initializeSong() {
    cover.src = `IMAGEM/${sortedPlaylist[index].file}.png`;
    songName.innerText = sortedPlaylist[index].songName;
    bandName.innerText = sortedPlaylist[index].artist;
    song.src = `songs/${sortedPlaylist[index].file}.mp3`;
    likeButtonRender(); 
}

// responsavel pela inicialização da musica e pela troca das imagens de play e pause
function playSong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

// Responsavel por pausar a musica 
function pauseSong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
}

// Responsavel por decidir o momento certo de chamar as funções de play e pause, através do evento click 
function playPauseDecider() {
    if (isPlaying === true) {
      pauseSong();
    } else {
      playSong();
    }
}

// Responsavel pelo botao de proxima musica
function previousSong() {
    if(index === 0){
        index = sortedPlaylist.length - 1;
    }
    else {
        index -=1;
    }
    initializeSong();
    playSong();
}

// Responsavel pelo botao da musica anterior
function nextSong() {
    if(index === sortedPlaylist.length - 1){
        index = 0;
    }
    else {
        index +=1;
    }
    
    initializeSong();
    playSong();
}

// Responsavel pela progressão da barra de progresso
function updateProgress() {
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`);
    songTime.innerText = toHHMMSS(song.currentTime);
}

// Responsavel pelos pulos na musica
function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width)* song.duration;
    song.currentTime = jumpToTime;
}

// Responsavel pelo sorteamento da musicas aleatorias
function shuffleArray(preShuffleArray) {
    const size = sortedPlaylist.length;
    let currentIndex =  size - 1;
    while(currentIndex > 0) {
        let randomIndex = Math.floor(Math.random()* size); // numero randomico
        let aux = preShuffleArray[currentIndex];
        preShuffleArray[currentIndex] = preShuffleArray[randomIndex];
        preShuffleArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

// responsavel por determinar se o botão de ordem aleatoria esta ligada ou não
function shuffleButtonClicked() {
    if(isShuffled === false){
        isShuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleButton.classList.add('button-active');
    }
    else {
        isShuffled = false;
        sortedPlaylist = [...originalplaylist];
        shuffleButton.classList.remove('button-active');
    }
}

// responsavel por determinar se o botão de repetição está pressionado
function repeatButtonClicked() {
    if (repeatOn === false) {
      repeatOn = true;
      repeatButton.classList.add('button-active');
    } else {
      repeatOn = false;
      repeatButton.classList.remove('button-active');
    }
}

// Codigo responsavel por repetir a musica caso o botão da função acima seja true
function nextOrRepeat() {
    if (repeatOn === false) {
        nextSong();
    }
    else {
        playSong();
    }
}

// Nome = toHHMMSS - para horas, minutos e segundos
function toHHMMSS(originalNumber) {
    let hours = Math.floor(originalNumber/3600);
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let secs = Math.floor(originalNumber - hours * 3600 - min * 60);

    return `${hours.toString().padStart(2, '0')}:${min.toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, "0")}`;
}

/*function updateCurrentTime() {
    songTime.innerText = toHHMMSS(song.currentTime);
} < ---- FUNÇÃO QUE FOI APAGADA E SEU CALCULO FOI MANDADO PARA O UPDATEPROGRESS*/

// Rersponsavel por atualizar o timer no layout da musica
function updateTotalTime() {
    toHHMMSS(song.duration);
    totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonClicked() {
    if (sortedPlaylist[index].liked === false) {
        sortedPlaylist[index].liked = true;
    }
    else {
        sortedPlaylist[index].liked = false;
    }
    likeButtonRender();
    localStorage.setItem('playlist', JSON.stringify(originalplaylist)); // armazenando um item 
}

initializeSong();

play.addEventListener('click', playPauseDecider); // evento click que chama a função playPauseDecider
next.addEventListener('click', nextSong); // evento de passar para a proxima musica em um click
previous.addEventListener('click', previousSong); // evento para voltar uma musica em um click
song.addEventListener('timeupdate', updateProgress); // evento para a mudança constante da barra de progresso
song.addEventListener('loadedmetadata', updateTotalTime); // evento que atualiza os valores do timer
song.addEventListener("ended", nextOrRepeat); // evento para pssar para a proxima musica ou repetir
progressContainer.addEventListener("click", jumpTo); // evento para a ação de pular em trechos da musica
shuffleButton.addEventListener("click", shuffleButtonClicked); // evento para o play das musicas em ordem aleatoria
repeatButton.addEventListener("click", repeatButtonClicked); // evento para quando o botão de repetir for clicado
likeButton.addEventListener('click', likeButtonClicked); // evento para quando o botão de like for clicado