const botoes = document.querySelectorAll(".like");  // Localiza todos os botões de like
const contador = document.querySelector("#contador");  // Localiza o número do contador
botoes.forEach(function (botaoClicado) {  // Percorre todos os botões
    botaoClicado.addEventListener("click", function () {  // Adiciona o evento de clique
        /*Recupera o valor existente no atributo data-valor do botão clicado.  */
        const valorSelecionado = Number(botaoClicado.dataset.valor);  
        contador.textContent = valorSelecionado; // Atualiza o número de likes
        botoes.forEach(function (botaoAtual) {  // Percorre novamente todos os botões
            const valorAtual = Number(botaoAtual.dataset.valor);  // Recupera o valor do botão atual
            /*Se o valor do botão for menor ou igual ao valor selecionado, o botão ficará ativo. */
            if (valorAtual <= valorSelecionado) {
                botaoAtual.classList.add("ativo"); // Deixa o joinha colorido
            } else {
                botaoAtual.classList.remove("ativo");  // Deixa o joinha apagado
            }
        });
    });
});
