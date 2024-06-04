/*
    Eventos - formulários

    - focus(): acionado quando o elemento recebe o foco do cursor.

    - blur(): acionado quando o elemento perde o foco do cursor.

    - change(): acionado quando o estado do elemento é modificado.
*/

$(document).ready( function() {
    // Opção obsoleta
    $('.campo-two').focus( function() {
        alert('Elemento foi focado.')
    })
});