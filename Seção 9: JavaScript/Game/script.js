let timerId = null; // variável que armazena a chamada da função timeout

function startGame() {
    let level_game = document.getElementById('level_game').value;

    window.location.href = 'jogo.html?' + level_game
}

function startingGame() {

    let url = window.location.search

    let level_game = url.replace('?', '')

    let time_seconds = 0

    if (level_game == 1) { time_seconds = 120; }

    if (level_game == 2) { time_seconds = 60; }

    if (level_game == 3) { time_seconds = 30; }

    // Inserindo segundos no span
    document.getElementById('cronometro').innerHTML = time_seconds;

    let qtd_ballons = 80;
    createBallons(qtd_ballons)

    // Imprimir quantidade de balões inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtd_ballons
    document.getElementById('baloes_estourados').innerHTML = 0

    countingTime(time_seconds + 1)
}

function countingTime(seconds) {
    seconds = seconds - 1;
    if(seconds == -1) {
        clearTimeout(timerId)
        game_over();
        return false
    }
    document.getElementById('cronometro').innerHTML = seconds
    timerId = setTimeout("countingTime("+seconds+")", 1000);
}
/*
function remove_eventos_baloes() {
    let i = 1 // contado para recuperar os balões por id

    // percorre os elementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b' + 1)) {
        // retira o evento onclick do elemento
        document.getElementById('b' + 1).onclick = ''
        i++ // faz a iteração da variável i
    }
}
*/
function game_over() {
    alert('Fim de jogo, você não conseguiu estourar todos os balões a tempo!')
    // remove_eventos_baloes()
}

function createBallons(qtd_ballons) {

    for(let i = 1; i <= qtd_ballons; i++) {
        let ballon = document.createElement('img');
        ballon.src = 'imagens/balao_azul_pequeno.png'
        ballon.style.margin = '10px';
        ballon.id = 'b' + i;
        ballon.onclick = function() { estourar(this) }

        document.getElementById('cenario').appendChild(ballon)
    }
}

function estourar(b) {
    let id_ballon = b.id;

    document.getElementById(id_ballon).setAttribute('onclick', '')
    document.getElementById(id_ballon).src = 'imagens/balao_azul_pequeno_estourado.png'

    pontuacao(-1)
}

function pontuacao(action) {

    let baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML
    let baloes_estourados = document.getElementById('baloes_estourados').innerHTML

    baloes_inteiros = parseInt(baloes_inteiros)
    baloes_estourados = parseInt(baloes_estourados)

    baloes_inteiros = baloes_inteiros + action
    baloes_estourados = baloes_estourados - action

    document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros
    document.getElementById('baloes_estourados').innerHTML = baloes_estourados

    situation_game(baloes_inteiros, baloes_estourados)
}

function situation_game(baloes_inteiros, baloes_estourados) {

    if(baloes_inteiros == 0) {
        alert('Parabéns, você estourou todos os balões a tempo.')
        stop_game()
    }
}

function stop_game() {
    clearTimeout(timerId)
}