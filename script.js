function resposta() {
  var criancas = document.querySelector('#crianca').value
  var adultos = document.querySelector('#adultos').value
  var idosos = document.querySelector('#idosos').value
  var horas = document.querySelector('#horas').value
// resposta do menu

  if (criancas && adultos && idosos && horas) {
    mat_carne(criancas, adultos, idosos, horas)
  }
  else{
    alert('prencha todas as colunas')
  }
}
// o resultado das informações do menu

function mat_carne(criancas, adultos, idosos, horas) {

  let resultado = 400 * adultos + 400 * idosos + (400/2 * criancas)
  console.log(resultado)


  let h2 = document.getElementById("resultado_carne")

  h2.innerText = "Você precisará de " + Math.ceil(resultado)  + " g de carne"
    
  mat_cerveja(criancas, adultos, idosos, horas)
}
// calcular a quantidade de carne

function mat_cerveja(criancas, adultos, idosos, horas) {

  let resultado = (4 * adultos + 2 * idosos) * horas


  let h2 = document.getElementById("resultado_cerveja")
  h2.innerText = "Você precisará de " + Math.ceil(resultado) + " Latas de cerveja"


  mat_refri(criancas, idosos, horas)
}
// calcular a quantidade de cerveja

function mat_refri (criancas, idosos, horas){
  let resultado = (5 * criancas + 2 * idosos) * horas

  let h2 = document.getElementById("resultado_refri")
  h2.innerText = "Você precisará de " + Math.ceil(resultado) + " latinhas de refrigerante"

  document.getElementById('resultado').classList.remove('esconder')
  document.getElementById('resultado').classList.add('grid')
}
