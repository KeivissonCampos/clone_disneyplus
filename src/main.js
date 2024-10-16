document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocutaElementosDoHeader();
        }else{
            exibeElementosDoHeader();
        }
    })

    // Seção de atrações. programação das abas
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

    // Seção FAQ. Accordions
    for (let i = 0; i < question.length; i++){
        question[i].addEventListener('click', abreOuFechaResposta);
    }
});

function ocutaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

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
