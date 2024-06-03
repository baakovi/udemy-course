// Comparador de igualdade
//  == - igual
//  === - igualdade
//  != <> - diferente
//  !== - diferente
//  < - menor
//  > - maior
//  <= - menor igual
//  >= - maior igual
if (2 == 2) {
    console.log("Igual");
} else {
    console.log("Não é igual");
}

// Operadores lógicos
//  && - E - Verdadeiro se todas as expressões forem verdadeiras
//  || - Ou - Verdadeiro se pelo menos uma das expressões forem verdadeiras
//  | - Negação - Inverte o resultado da expressão

let nota = Number(prompt('Digite a nota do aluno: '));
let faltas = prompt('Digite a quantidade de faltas do aluno: ')

let media = 7;
let faltas_limite = 15;

if (nota >= media && faltas <= faltas_limite) {
    document.write("Aprovado");
} else {
    document.write("Reprovado");
}

// -----------
if (2 == 2 && 3 == 4) {
    // retorna falso pq 3 não é igual a 4
}