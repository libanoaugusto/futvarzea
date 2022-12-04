const url = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/times/'

const id = location.search.split('=')[1]
const formEdicao = id !== undefined
if (formEdicao) {
    fetch(url + id).then(function (resposta) {
        console.log('encontrado time com id ' + id)
        return resposta.json()

    })
        .then(function (time) {

            preencheFormulario(time)

        })
}

function preencheFormulario(time) {
    document.getElementById("nome").value = time.nome
    document.getElementById("escudo_time").value = time.escudo
    document.getElementById("contato_time").value = time.contato
    document.getElementById("cor_uniforme").value = time.cor
    document.getElementById("endereco_campo").value = time.local
    document.getElementById("horario_partida").value = time.horario
}

function salvar() {
    let nome_time = document.getElementById("nome").value
    let escudo_time = document.getElementById("escudo_time").value
    let contato_time = document.getElementById("contato_time").value
    let cor_time = document.getElementById("cor_uniforme").value
    let endereco_campo = document.getElementById("endereco_campo").value
    let horario_partida = document.getElementById("horario_partida").value

    let time = {
        nome: nome_time,
        escudo: escudo_time,
        contato: contato_time,
        cor: cor_time,
        local: endereco_campo,
        horario: horario_partida,

    }
    

    let metodo
    if(formEdicao) {
        metodo = 'PUT'
        time.id = id
    } else {
        metodo = 'POST'
    }    

    fetch(url, {
        method: metodo,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(time)

    })
        .then(function (resposta) {
            console.log('salvo com sucesso', resposta)
        })
}