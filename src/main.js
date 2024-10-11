document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    // Adiciona o evento de clique para cada botão de aba
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            // Esconde todas as abas antes de mostrar a aba alvo
            escondeTodasAbas();
            
            // Mostra a aba alvo
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        });
    }

    for (let i = 0; i < question.length; i++){
        question[i].addEventListener('click', abreOuFechaResposta);
    }
});

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    // console.log(elemento);
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    // Seleciona todos os conteúdos das abas
    const tabsContent = document.querySelectorAll('[data-tab-id]');

    // Remove a classe de todas as abas
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('shows__list--is-active');
    }
}
