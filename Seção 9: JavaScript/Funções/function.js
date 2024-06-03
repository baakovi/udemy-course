function calcularAreaTerreno(largura, comprimento) {
    let area = largura * comprimento

    return area

    // document.write(area);
}

// Chamando a função
// calcularAreaTerreno(15, 25);

let largura = prompt('Digite a largura do terreno: ')
let comprimento = prompt('Digite o comprimento do terreno: ')

let areaTerreno = calcularAreaTerreno(largura, comprimento);
document.write("O terreno possui " + areaTerreno + " metros quadrados.")