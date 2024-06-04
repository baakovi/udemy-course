## O que é jQuery?

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg" height="60" align="right">

- Framework escrito em JavaScript;
- Com ele, é possível escrever menos código, sem atrapalhar o desempenho;
- Incorporação e criação de plugins: mini API com o objetivo de resolver um problema em específico;
- Seleção e manipulação de elementos HTML;
- Manipulação da folha de estilo CSS;
- Efeitos e animações;
- Ajax;
- Eventos.
 
<br>

### Importando o jQuery em páginas HTML

| É possível incluir o jQuery de duas formas, sendo elas:

- <b>Via link CDN.</b>

```html
<!-- Framework completo -->
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>

<!-- Framework completo minified -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>


<!-- https://releases.jquery.com/jquery/ -->
<!-- https://jquery.com/download/ -->
```

<br>

- <b>Localmente.</b>

Baixar o arquivo, incluir ele em uma pasta no nosso projeto, e importar ele pelo script, como um arquivo JS normal.

<br>
<br>

### Eventos no jQuery
Exemplo: <b>Função .ready()</b>

```javascript
$( document ).ready( function() {
    console.log( "O DOM está carregado!" )
});

// Indica que o DOM foi construído para ser utilizado no site, deixando-o mais seguro.
```