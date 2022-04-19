let num = document.querySelector('input#fnum') 
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //vetor analisar os dados

function isNumero(n) { //vai receber um número.
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l)  { //vai recever um número e lista.
    if (l.indexOf(Number(n)) != -1 ) { // -1 indica que o valor não foi encontrado na lista. aula de array 15 curso em video.
        return true
    } else { 
        return false 
    }


}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){ /*só vai adicionar se for um número, valor que ta aqui dentro de número vai ser analisado pra ver se é realmente um número.
E também ( && ) ele só vai adicionar se NÃO(!) estiver inLista. inLista também vai ser uma análise pra saber se o número digitado está em lista. 
Então ele só vai adicionar se for verdade os dois.*/
        valores.push(Number(num.value))//valores é meu índice,push é adicionar um elemento num vetor
        let item = document.createElement('option') // vai criar um item dentro da lista, com tag option. 
        item.text= `Valor ${num.value} adicionado.` // meu item vai ter um valor text, vai ser uma string. 
        lista.appendChild(item) // e pra adicionar na lista é feito isso..
        res.innerHTML = ''// limpa o resultado mostrado quando inserir outro
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    } 
    num.value = '' //limpa o valor de entrada
    num.focus() // como se clicasse com o mouse pro cursor pisca.
}
function finalizar() {
 if (valores.length == 0 ) { //se o vetor estiver vazio
     window.alert ('Adicione valores antes de finalizar!')
 } else { 
     let tot = valores.length //saber quantos valores meu vetor tem.
     let maior = valores [0]
     let menor = valores [0]
     let soma = 0
     let media = 0 
     for(let pos in valores) {
         soma +=valores[pos]
         if (valores[pos] > maior)
             maior = valores [pos]
         if (valores[pos] < menor)
             menor = valores [pos]
     }
     media = soma / tot
     res.innerHTML = '' //zerar o valor
     res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
     res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
     res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
     res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
     res.innerHTML += `<p>A média dos valores digitados é  ${media}.</p>`
    }
}