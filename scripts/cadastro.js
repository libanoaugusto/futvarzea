var lista_time =[]

function salvar() {
    let nome_time = document.getElementById("nome").value
    let escudo_time = document.getElementById("escudo").value
    let contato_time = document.getElementById("contato").value
    let cor_time = document.getElementById("cor").value
    let endereco_campo = document.getElementById("endereco").value
    let horario_partida = document.getElementById("horario").value

    let time = {
        nome: nome_time,
        escudo: escudo_time,
        contato: contato_time,
        cor: cor_time,
        endereco: endereco_campo,
        horario: horario_partida,

    }
    lista_time.push(time)

}
