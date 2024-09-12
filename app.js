// 1°
function primeiraQuestao(){
    let largura = prompt('Digite a largura do terreno: ')
    let comprimento = prompt('Digite o comprimento do terreno: ')
    
    let area = largura * comprimento
    
    alert(`A área é igual à ${area}m².`)
}


// 2°
function segundaQuestao(){
    let QuantCavalos = prompt('Digite a quantidade de cavalos do haras: ')

    console.log(`A quantidade de ferraduras necessárias são ${QuantCavalos * 4}`)
}

// 3°
function terceiraQuestao(){
    let numero = prompt('Digite um número: ')
    
    alert(`A terça parte de ${numero} é ${numero / 3}.`)
}

// 4°
function quartaQuestao(){
    let numero = prompt('Digite um número: ')
    
    alert(`O dobro de ${numero} é ${numero * 2}\nO triplo de ${numero} é ${numero * 3}.`)
}

// 5°
function quintaQuestao(){
    let unidade = prompt('Digite a unidade que deseja usar: ')
    let altura = prompt('Digite a altura da caixa cilíndrica: ')
    let diametro = prompt('Digite o diâmetro da caixa cilíndrica: ')

    let volume = Math.PI * Math.pow(diametro / 2, 2) * altura

    alert(`O volume da caixa cilíndrica é igual à ${volume.toFixed(2)}${unidade}³`)
}

//6°
function sextaQuestao(){
    let metros = prompt('Digite a distância em metros: ')

    let km = metros / 1000
    let hm = km * 10
    let dam = hm * 10
    let dm = metros * 10
    let cm = dm * 10
    let mm = cm * 10

    alert(`km: ${km}\nhm: ${hm}\ndam: ${dam}\nm: ${metros}\ndm: ${dm}\ncm: ${cm}\nmm: ${mm}`)
}

//7°
function setimaQuestao(){
    let viagens = prompt('Digite quantas viagens o motorista de uber fez: ')

    let valor = 6.8 * viagens

    alert(`O motorista ganhou R$${valor}.`)
}

//8°
function oitavaQuestao(){
    let altura = prompt('Digite a altura do triângulo: ')
    let comprimento = prompt('Digite o comprimento da base do triângulo')

    let area = (altura * comprimento) / 2

    alert(`A área do triângulo é igual à ${area}m²`)
}