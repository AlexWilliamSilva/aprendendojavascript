let automaticoAtivo = false; 
let intervalo; 

function Vermelho() {
    document.getElementById("imagem-semaforo").src = "img/semaforovermelho.png";
}

function Amarelo() {
    document.getElementById("imagem-semaforo").src = "img/semaforoamarelo.png";
}

function Verde() {
    document.getElementById("imagem-semaforo").src = "img/semaforoverde.png";
}

function Desligado() {
    if (automaticoAtivo) { 
        clearInterval(intervalo); 
        automaticoAtivo = false; 
    }
    document.getElementById('imagem-semaforo').src = "img/semaforodesligado.png"; 
}

// Função que ativa o modo automático
function automatico() {
    Desligado(); 
    automaticoAtivo = true; 
    let corAtual = 'red'; 
    Vermelho(); 

    intervalo = setInterval(() => { // Intervalo de tempo
        if (corAtual === 'red') {
            Amarelo();
            corAtual = 'yellow';
        } else if (corAtual === 'yellow') {
            Verde();
            corAtual = 'green';
        } else {
            Vermelho();
            corAtual = 'red';
        }
    }, 1000); // Intervalo de 1 segundo
}