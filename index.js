/* SÓ PODE CADASTRAR UM USUARIO POR VEZ E DEPOIS ATUALIZAR. */

alert("Seja bem vindo Usuario. Fique ciente que nesse projeto você só pode cadastrar um cliente por vez. Por favor atualize a página quando terminar sua consulta!")

const condicaoEmprestimo = document.querySelector('#condicaoEmprestimoBtn')
const condicaoItems = document.querySelector('.items')
const resultadoFim = document.querySelector('.resultadoFim')


// botão resultado
const resultado = document.querySelector('.btnresultado')

// inputs
const nomeInput = document.querySelector('#name')
const idadeInput = document.querySelector('#idade')
const rendaInput = document.querySelector('#renda')
const mesesTbInput = document.querySelector('#mesestrabalho')


//error msg
const errorMsg = document.querySelector('.msg')

function conditionEmprestimo() {
    condicaoItems.innerHTML = `<strong>LEIA COM ATENÇÃO!</strong> <br> 1º-Idade minina tem que ser de <strong>18 anos</strong> <br> 2º-No minimo <strong>6 meses</strong> de trabalho <br> 3º-Renda mensal de no minimo <strong>R$ 2.000,00</strong>`  
    condicaoItems.style.background = '#6a6e81'
    condicaoItems.style.padding = '12px' 
    condicaoItems.style.color = 'white'
}
function resulFinal(e){
    e.preventDefault();

     const nomeValue = nomeInput.value
     const idadeValue = Number(idadeInput.value)
     const rendaValue = Number(rendaInput.value)
     const mesesTbValue = Number(mesesTbInput.value)

    // SE O CLIENTE NAO PREENCHER UM DOS CAMPOS.
    if(nomeValue === '' || idadeValue === '' || rendaValue === '' || mesesTbValue === '') {
        errorMsg.innerText = 'Os campos não foram preenchidos completamente. Tente novamente!'
        errorMsg.style.color = 'red'
        errorMsg.style.fontSize = '18px'
        setTimeout(() => {
            errorMsg.textContent = ""
            errorMsg.classList = ""
        }, 5000);

    return;

    }
    // SE O CLIENTE PREENCHER OS CAMPOS 'IDADE', 'RENDA' E 'MESES' COM NUMEROS MENOR QUE '0'.
    if (idadeValue <= 0 || rendaValue <= 0 || mesesTbValue <= 0) {
        nomeInput.value = ""
        idadeInput.value = ""
        rendaInput.value = ""
        mesesTbInput.value = ""
        alert('Valor Inválido')
    return;

    }

    const li = document.createElement('li')
    li.classList = 'item'

    //checked masculino e feminino
    const genero = document.querySelector('input[name="sexo"]:checked').value;
    
    // SE O EMPRESTIMO DER NEGADO (NAO POSSUIR UM DOS REQUISITOS)
    if (idadeValue < 18 || rendaValue < 2000 || mesesTbValue < 6) {

        li.innerHTML = `Infelizmente você não possuí um dos requisitos, mas você pode tentar novamente depois de <strong>30 dias</strong>: <br> seus dados: <br> Nome: <strong>${nomeValue}</strong> <br> Idade: <strong>${idadeValue} anos</strong> <br> Renda: <strong>R$ ${rendaValue}</strong> <br> Meses trabalhando: <strong>${mesesTbValue} meses</strong> <br>Sexo: <strong>${genero}</strong>` 
        resultadoFim.appendChild(li);
        //css
        resultadoFim.style.background = '#E91C1C'
        resultadoFim.style.color = '#DDD7D1'
        resultadoFim.style.borderRadius = '4px'
        resultadoFim.style.fontSize = '18px'
        resultadoFim.style.paddingTop = '16px'
        resultadoFim.style.paddingBottom = '16px'

        nomeInput.value = ""
        idadeInput.value = ""
        rendaInput.value = ""
        mesesTbInput.value = ""
    return;

    } else { //SE O EMPRESTIMO FOR APROVADO
        let valorEmprestimo = rendaValue * 3.72

        li.innerHTML = `Parabéns ${nomeValue}, seu emprestimo foi aprovado com sucesso no valor de <strong>R$ ${valorEmprestimo}.</strong> confirme seus dados: <br> Nome: <strong>${nomeValue}</strong> <br> Idade: <strong>${idadeValue} anos</strong> <br> Renda: <strong>R$ ${rendaValue}</strong> <br> Meses trabalhando: <strong>${mesesTbValue} meses</strong> <br> Sexo: <strong>${genero}</strong>`
        resultadoFim.appendChild(li);
        //css
        resultadoFim.style.background = '#57F570'
        resultadoFim.style.color = '#222'
        resultadoFim.style.borderRadius = '4px'
        resultadoFim.style.fontSize = '18px'
        resultadoFim.style.paddingTop = '16px'
        resultadoFim.style.paddingBottom = '16px'

        nomeInput.value = ""
        idadeInput.value = ""
        rendaInput.value = ""
        mesesTbInput.value = ""
        genero = document.querySelector('input[name="sexo"]').value
    return;
    }
}

condicaoEmprestimo.addEventListener('mouseenter', conditionEmprestimo)
resultado.addEventListener('click', resulFinal)
