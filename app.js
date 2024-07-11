function sortear (){
    let quantidade = parseInt (document.getElementById ('quantidade').value);
    let de = parseInt (document.getElementById ('de').value);
    let ate = parseInt (document.getElementById ('ate').value);
    

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes (numero)) {
            numero = obterNumeroAleatorio (de, ate);
        }
        sorteados.push(numero);
    }
    console.log (sorteados);
    let numSorteado = document.getElementById ('resultado');
    numSorteado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBtn ();
}

function obterNumeroAleatorio (min, max){
    return Math.floor(Math.random () * (max - min + 1)) + min;
}

function alterarStatusBtn (){
    let btnReiniciar = document.getElementById ('btn-reiniciar');
    if (btnReiniciar.classList.contains('container__botao-desabilitado')){
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add ('container__botao');
    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add ('container__botao-desabilitado');
    }
    let btnSortear = document.getElementById ('btn-sortear');
    if (btnSortear.classList.contains('container__botao-desabilitado')){
        btnSortear.classList.remove('container__botao-desabilitado');
        btnSortear.classList.add ('container__botao');
    } else {
        btnSortear.classList.remove('container__botao');
        btnSortear.classList.add ('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById ('quantidade').value = '';
    document.getElementById ('de').value = '';
    document.getElementById ('ate').value = '';
    document.getElementById ('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBtn();
}




