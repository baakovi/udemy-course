let timerId = null; // variável que armazena a chamada da função timeout

function startGame() {
    let level_game = document.getElementById('level_game').value;

    window.location.href = 'jogo.html?' + level_game

    // alert(level_game)
}

function startingGame() {
    // alert('Jogo iniciado');

    let url = window.location.search
    // alert(url)

    let level_game = url.replace('?', '')

    let time_seconds = 0

    if (level_game == 1) {
        // 1- Fácil: 120 segundos
        time_seconds = 120;

    }

    if (level_game == 2) {
        // 2- Normal: 60 segundos
        time_seconds = 60;

    }

    if (level_game == 3) {
        // 3- Difícil: 30 segundos
        time_seconds = 30;

    }

    // Inserindo segundos no span
    document.getElementById('cronometro').innerHTML = time_seconds;

    let qtd_ballons = 20;
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

function game_over() {
    alert('Fim de jogo, você não conseguiu estorar todos os balões a tempo!')
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

function estourar(e) {
    let id_ballon = e.id;

    document.getElementById(id_ballon).src = 'imagens/balao_azul_pequeno_estourado.png'

    // alert(id_ballon)
}