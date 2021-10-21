
const sobre = document.querySelector('#sobre');
const conhecimento = document.querySelector('#conhecimentos')
const objetivo = document.querySelector('#objetivos');


function sobresView () {
    sobre.style.display = 'block';
    conhecimento.style.display = 'none';
    objetivo.style.display = 'none';
    criar();
}
function conhecimentoView () {
    conhecimento.style.display = 'block';
    sobre.style.display = 'none';
    objetivo.style.display = 'none';
    criar2();
}
function objetivoView () {
    objetivo.style.display = 'block';
    sobre.style.display = 'none';
    conhecimento.style.display = 'none';
    criar3();
}




const dados = {
    Nome: 'THIAGO ',
    SobreNome: 'DE SETA DOS SANTOS',
    Endereço: 'RUA PRINCIPAL, 123 RS - SANTA MARIA.',
    Email: ' THIAGO_SETA@HOTMAIL.COM',
    Telefone: '55-999667935',
    Descrição: ' Eu sou uma pessoa que esta em busca sempre da evolução diária e constante. Apaixonado por tecnologia, games e cultura oriental ',
    RedeSocial: ['linkedin', 'gitHub', 'Twitter', 'Facebook'],
    Conhecimentos: ['HTML ', ' CSS', ' JS', ' LINUX', ' C', ' Heroku', ' SQL'],
    Pessoais: 'Objetivos Pessoais: Fazer viagens internacionais, ler mais livros, cursar psicologia, aprimorar a oratória, aprender alemão e japonês. ',
    Profissionais:  ` Objetivos Profissionais: Meu objetivo é alem de me tornar um desenvolvedor, é ser um gestor de T.I.Aprimorar e elevar meu conhecimento em inglês.
        Estar liderando uma equipe em algum projeto que envolva inteligência artificial com a Growdev ou alguma empresa parceira,
        fazer a diferença não apenas para minha pessoa, mas a todos a minha volta.`
}

sobresView();

function criar () {

    const verificarH1 = document.querySelector('h1');

    if (!verificarH1) {
        const span = document.createElement('span');
        const h1 = document.createElement('h1');
        const descricao = document.createElement('p');
        const endereco = document.createElement('p');
        const email = document.querySelector('span')

        h1.innerText = dados.Nome;
        h1.style.color = 'black';

        span.innerText = dados.SobreNome;
        span.style.color = 'chocolate';

        endereco.innerText = dados.Endereço + dados.Email;
        endereco.className = 'endereço';

        descricao.innerText = dados.Descrição;
        descricao.className = 'pessoa';

        h1.appendChild(span)
        sobre.appendChild(h1)
        sobre.appendChild(endereco)
        sobre.appendChild(descricao)
    }

}

function criar2 () {

    const verificarLi = document.querySelector('li');

    if (!verificarLi) {
        const paragrafo = document.createElement('li');

        dados.Conhecimentos.forEach(element => {
            paragrafo.innerText += element;
            paragrafo.className = 'quebraLinha'
            conhecimento.appendChild(paragrafo)
        });

    }

}


function criar3 () {

    const verificarParagrafo = document.querySelector('#objetivos p');

    if (!verificarParagrafo) {
        const paragrafo = document.createElement('p');
        const p = document.createElement('p')

        paragrafo.innerText = dados.Pessoais;
        paragrafo.className = 'pessoaPP';
        console.log(paragrafo)
        
        p.innerText = dados.Profissionais;
        p.className = 'pessoa'

        objetivo.appendChild(paragrafo)
        objetivo.appendChild(p);
        console.log(objetivo.appendChild(p))

    }

}
