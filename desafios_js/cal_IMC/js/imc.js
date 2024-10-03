const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const result = document.getElementById("result");

function validarValor(input) {
    if (input.value < 0) {
        input.value = '';
        alert("Este valor não pode ser negativo.");
    }
    const valor = input.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    if (valor) {
        const numero = parseInt(valor, 10);
        input.value = (numero / 100).toFixed(2); // Formata para metros com 2 casas decimais
    } else {
        input.value = '';
    }
}

function calculoIMC(event) {
    event.preventDefault();

    const pesoValor = parseFloat(peso.value);
    const alturaValor = parseFloat(altura.value);

    if (isNaN(pesoValor) || isNaN(alturaValor) || alturaValor <= 0 || pesoValor <= 0) {
        result.valor = "Insira valores validos para o cálculo";
        return;
    }

    var imc = pesoValor / (alturaValor * alturaValor);
    imc = imc.toFixed(2);

    if (imc < 18.5) {
        result.value = `Seu peso é de ${imc} e você está abaixo do peso`;
    }
    else if(imc >= 18.6 && imc <= 24.9) {
        result.value = `Seu peso é de ${imc} e você está com um peso normal`;
    }
    else if(imc >= 25 && imc <= 29.9) {
        result.value = `Seu peso é de ${imc} e você está com sobrepeso`;
    }
    else if(imc >= 30 && imc <= 34.9) {
        result.value = `Seu peso é de ${imc} e você está com obesidade grau I`;
    }
    else if(imc >= 35 && imc <= 39.9) {
        result.value = `Seu peso é de ${imc} e você está com obesidade grau II`;
    }
    else {
        result.value = `Seu peso é de ${imc} e você está com obesidade grau III ou extrema`;
    }
}