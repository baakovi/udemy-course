/*
    Eventos - teclado

    - keydown(): acionado no momento em que uma tecla é pressionada (soltando ou não a tecla)

    - keypress(): acionado no momento em que uma tecla é pressionada (soltando-a ou não), porém não captura todas as teclas, como por exemplo - alt, crtl, esc, shift, etc.

    - keyup(): acionada no momento em que a tecla é liberada.
*/

$(document).ready( function() {
    // $('#campo-one').keydown( function() {
    $('#campo-one').keypress( function() {
        alert('Botão foi pressionado')
    });
});