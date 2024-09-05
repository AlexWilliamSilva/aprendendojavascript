# aprendendojavascript

Javascript:

tipos de variaveis:

integer;
float;
character;
string;
boolean.

Exercícios com variaveis:

a - Idade de uma pessoa
R: integer

b - Valor de uma conta de luz
R: float

c - Nome de um cliente
R: string

d - Estado de uma lâmpada (acesa/apagada)
R: boolean

e - Senha de acesso ao Facebook
R: character

f - Quantidade de litros de combustível abastecidos em um posto
R: float

g - Situação de uma determinada fatura (paga/não paga)
R: boolean

h - Média final de um aluno
R: integer 

----------------------------------------------------------------------------------------------------------------------------------------------

                                                            CÓDIGOS
                                                        
            <script src="js/script.js"></script> <!-- caminho para a pasta de javascript que linka diretamente com o arquivo do javascript -->

            let exemplo = "algum valor para a variavel";
            "let" só funciona na função ou no local em que foi criado

---------------------------------------------------------------------------------------------------------------------------------------------- ~~

        Alert()

            o que ele é?
                função usada para criar uma caixa de dialogo na tela do usuario que contem uma mensagem, e pode ser tirada através do efetuado click no botão ok;

            como pode ser usado?
                pode ser uado para "avisos" ou para "informações":
                AVISOS: "Preencha todos os campos obrigatórios";
                        "Senha incorreta. Tente novamente";
                        "O arquivo foi salvo com sucesso".

                INFORMAÇÕES: "Bem vindo ao site!";
                             "Esta é uma página experimental".

    Usado no JavaScript da seguinte forma:

        alert("Sua mensagem aqui");

        function  verificarIdade() {
            let idade = prompt ("Digite sua idade:");
            if (idade < 18) {
                alert("Você não tem idade suficiente para acessar este conteúdo.");
            } else {
                alert("Acesso permitido.");
            }
        }