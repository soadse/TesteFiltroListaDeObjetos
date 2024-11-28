let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let div4 = document.createElement('div')
document.body.appendChild(div4)

let objeto = [
    {nome: 'Rodrigo', idade: 29, cidade: 'São Paulo', profissao: 'Desenvolvedor'},
    {nome: 'Rafael', idade: 31, cidade: 'Bahia', profissao: 'Veterinario'},
    {nome: 'Luis', idade: 51, cidade: 'Alagoas', profissao: 'Cabeleleiro'},
    {nome: 'Eliete', idade: 65, cidade: 'Pernambuco', profissao: 'Costureira'},
    {nome: 'Floraci', idade: 74, cidade: 'Rio de Janeiro', profissao: 'Costureira'},
]
let nomeBusca = 'floraci'

// Modo básico para percorrer pela lista de objetos
// for(i=0; i<objeto.length; i++){
//     div1.innerHTML += objeto[i].nome
// }


// Melhor método para percorrer uma lista de objetos
objeto.forEach((item) => {
    div2.innerHTML += `Nome: ${item.nome}<br>Idade: ${item.idade}<hr>`
})

// ↓Para percorrer uma lista de objetos e validar se há o valor solicitado↓

//Esse bloco é para validar se o nome informado consta na lista de objetos
let busca = objeto.find((e)=>{
    return e.nome.toLowerCase() === nomeBusca.toLowerCase()
})

// Se a validacao acima for verdadeira ele executara o bloco abaixo
if(busca){
    let busca = objeto.find((e)=>{
        div4.innerHTML = `Idade: ${e.idade} anos<br>Cidade: ${e.cidade}<br>Profissão: ${e.profissao}`
        return e.nome.toLowerCase() === nomeBusca.toLowerCase()
        
    })
    div3.innerHTML = `Nome encontrado: ${nomeBusca.toUpperCase()}`
} else {
    div3.innerHTML = `Nome não encontrado: ${nomeBusca}`
}