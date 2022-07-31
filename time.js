function Time(nome, contato, cor_do_uniforme, local_campo){
    this.nome=nome;
    this.contato=contato;
    this.cor_do_uniforme=cor_do_uniforme;
    this.local_campo=local_campo;
}

function Contato (nome, telefone){
    this.nome=nome;
    this.telefone=telefone;
}

const paulo=new Contato("Paulo", "44444")
const star=new Time("star", paulo,"verde","rua do lago")
console.log(star)