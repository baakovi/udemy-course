//  + <- adição
//  - <- subtração
//  * <- multiplicação
//  / <- divisão
//  % <- módulo
//  ++ <- incremento (adicionar mais 1)
//  -- <- decremento (diminuir mais 1)

let num1 = parseInt(prompt('Digite o valor A: '))
let num2 = parseInt(prompt('Digite o valor B: '))

document.write("A soma de " + num1 + " e " + num2 + " é: " + (num1 + num2) + "<br>");
document.write("A subtração de " + num1 + " e " + num2 + " é: " + (num1 - num2) + "<br>");
document.write("A multiplicação de " + num1 + " e " + num2 + " é: " + (num1 * num2) + "<br>");
document.write("A divisão de " + num1 + " e " + num2 + " é: " + (num1 / num2) + "<br>");
document.write("O módulo de " + num1 + " e " + num2 + " é: " + (num1 % num2) + "<br>");
document.write("O incremento de " + num1 + " é: " + (++num1) + "<br>");
document.write("O drecemento de " + num2 + " é: " + (--num2) + "<br>");