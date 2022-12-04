const url = 'http://ntcursoapi-env.eba-hvwnzgx7.us-east-1.elasticbeanstalk.com/nt-curso-api/times/'

fetch(url).then(function (resposta) {
    console.log('Sucesso!', resposta.status)
    return resposta.json()
})
.then(function (times) {
    
let tabela = document.getElementById('tabela-times')

times.forEach(function(time, indice) {
    let linha =tabela.insertRow()
    let nome = linha.insertCell(0)
    nome.innerHTML = time.nome
    let escudo = linha.insertCell(1)
    escudo.innerHTML = time.escudo
    let contato= linha.insertCell(2)
    contato.innerHTML = time.contato 
    let cor = linha.insertCell(3)
    cor.innerHTML = time.cor
    let local = linha.insertCell(4)
    local.innerHTML = time.local
    let horario = linha.insertCell(5)
    horario.innerHTML = time.horario

    var img = document.createElement('img')
    img.src = './imagens/apagar.png'
    img.style.width = '15px'
    let acoes = linha.insertCell(6)
    acoes.appendChild(img)

    var imgEditar = document.createElement('img')
    imgEditar.src = './imagens/editar.png'
    imgEditar.style.width = '15px'
    acoes.appendChild(imgEditar)

    img.addEventListener('click', () => apagar (time.id))
    imgEditar.addEventListener('click',() => editar(time.id))
})
    
})
.catch(function (erro) {
    console.warn('Algo deu errado', erro)
})

function editar (id) {
    window.location.href='./cadastro.html?id=' + id
}
function apagar(id){
    fetch(url + id, { method: 'DELETE' })
    .then(function(resposta) {
        console.log('Apagado com sucesso', resposta)
        document.location.reload()
    })
}





    
