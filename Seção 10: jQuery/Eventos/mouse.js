/*
    Eventos - mouse

    - click: acionado no clique do mouse.
    
    - dblclick: acionado no clique duplo do mouse.

    - mousedown: acionado no clique do mouse (soltando ou não o botão);

    - mouseover: acionado quando o cursor do mouse sobrepõe o elemento da página.

    - mouseout: acionado quando o cursor do mouse sai da área de um elemento da página.
*/

$(document).ready( function() {
    $('#div-one').dblclick( function() {
        alert('Elemento foi clicado duas vezes.')
    });
});