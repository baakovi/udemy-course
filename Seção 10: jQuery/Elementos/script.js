// Selecionando elementos --
// $(elemento ou elementos).uma_acao();
// tag
// id
// class

function exibeElementoPorTag(tag) {
    $(tag).show();
}

function ocultaElementoPorTag(tag) {
    $(tag).hide();
}

// Exibição e ocultação por classe
function exibeElementoPorClasse(classe) {
    $('.'+classe).show();
}

function ocultaElementoPorClasse(classe) {
    $('.'+classe).hide();
}

// Exibição e ocultação por ID
function exibeElementoPorID(id) {
    $('#'+id).show();
}

function ocultaElementoPorID(id) {
    $('#'+id).hide();
}