// Criando uma Promise
let minhaPromessa = new Promise(function(resolve, reject) {

    // Simulando uma operação demorada (pode ser uma requisição à API, por exemplo)
    setTimeout(function() {
      let sucesso = true; // Se a operação foi bem-sucedida
      if (sucesso) {
        resolve("Tudo certo!"); // Resolvendo a Promise com um valor
      } else {
        reject("Algo deu errado!"); // Rejeitando a Promise com um erro
      }
    }, 2000); // Espera 2 segundos
  });
  
  // Consumindo a Promise
  minhaPromessa
    .then(function(resultado) {
      console.log("Sucesso:", resultado); // Executa se a Promise for resolvida
    })
    .catch(function(erro) {
      console.error("Erro:", erro); // Executa se a Promise for rejeitada
    });
  