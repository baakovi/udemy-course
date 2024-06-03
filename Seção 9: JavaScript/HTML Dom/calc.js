
function calcular() {
    let operacao = document.getElementById('operacao').value;

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(num1 == '' || num1 == null) {
        alert('Favor digitar um número válido para operação.')
        return false
    }

    if(num2 == '' || num2 == null) {
        alert('Favor digitar um número válido para operação.')
        return false
    }

    let resultado = null;

    switch(operacao) {
        case '1': // subtração
            resultado = num1 - num2
            break;
            
            case '2': //adição
            resultado = num1 + num2
            break;

            case '3': //multiplicação
            resultado = num1 * num2
            break;
            
            case '4': //divisão
            resultado = num1 / num2
            break;
            
            default:
                alert('A opção selecionada é inválida');
                return false
            }

    // alert(resultado)

    document.getElementById('result').value = resultado;
}