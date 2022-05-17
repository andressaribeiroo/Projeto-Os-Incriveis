const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        
        if(idSelecionado === 'sindrome') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

        const imagemJogador1 = document.getElementById('jogador-1');
        imagemJogador1.src = `./asserts/${idSelecionado}.png`

        const nomeJogador1 =document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-nome');
        
        nomeJogador1.innerHTML = nomeSelecionado;
    });
});







