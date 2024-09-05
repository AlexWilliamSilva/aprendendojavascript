let lampadaQuebrada = false; // variavel do tipo let boolean atribuida com o valor false(em pt-br falso)

function acendendolampada(){ // função para a troca de imagem
    if (!lampadaQuebrada) { // nega o falso atribuido na variavel, forçando a troca de imagem
        lampadas.src = 'multimidia/lampada-acesa.jpg'; // imagem da lampada acesa
    }
}

function lampadaApagada(){ // função para a troca de imagem
    if (!lampadaQuebrada) {  // nega o falso atribuido na variavel, forçando a troca de imagem
        lampadas.src = 'multimidia/lampada-apagada.jpg'; // imagem da lampada apagada
    }
}

function lampadaQuebrad(){ // função para a troca de imagem
    lampadaQuebrada = true; // passando o valor para verdadeiro, aonde sera o ponto de inicio para a quebra permanente
    lampadas.src = 'multimidia/lampada-quebrada.jpg'; // imagem da lampada quebrada
}

lampadas.addEventListener('mouseover', acendendolampada); // acende a lampada após o mouse ser posicionado na imagem
lampadas.addEventListener('mouseout', lampadaApagada); // desliga após o mouse sair de cima da imagem
lampadas.addEventListener('click', lampadaQuebrad); // quebra apos ser efetuado um click na imagem
//tambem pode ser trocado por 'dbclick' = double click


// ANOTAÇÔES ADICIONAIS

/* 1 - 3 tipos de variaveis - let, var e const --- const é um tipo de variavel fixa, aonde uma vez atribuida com um valor não pode ser 
mudada por outro decorrente nos codigos abaixo */

// 2 - 'mouseout' pode tambem ser 'mouseleave' que mantem o mesmo funcionamento citado anteriormente

// 3 - 'click' tambem pode ser trocado por 'dbclick' = double click, onde precisara ser efetuado dois clicks na imagem

// 4 - se usado o codigo "const exemplo = document.getElementById('???');":
                                        // Significados 
    
    /* "const" = const é um tipo de variavel fixa, aonde uma vez atribuida com um valor não pode ser mudada por outro decorrente nos 
    codigos abaixo */
    
    /* "exemplo =" = atribuição em uma variavel */ 

    /* "document.getElementById('???');" = getElementById é um método do document que retorna um elemento procurado através do Id 
    especificado entre parenteses */

    /* acrescentado que se nao tiver um id pode ser usado no lugar de "getElementById()" o "querySelector()", aonde dentro do parenteses 
    ficara um elemento presente em qualquer "seletor" -- EX.: Body ou p */
