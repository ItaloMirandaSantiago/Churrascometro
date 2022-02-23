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


  function mat_carne(criancas, adultos, idosos, horas) {
   let soma = criancas + adultos + idosos
   let multiplicar = soma * horas
   let re = multiplicar /3

    let h2 = document.getElementById("resultado_carne")

    h2.innerText = "Você precisará de " + Math.ceil(re) + " Kg de carne"
    
  mat_cerveja(criancas, adultos, idosos, horas)

}

function mat_cerveja(criancas, adultos, idosos, horas) {
  let ra = criancas + adultos + idosos 
  let rb = ra * horas
  let re = rb /2


  let h2 = document.getElementById("resultado_cerveja")
  h2.innerText = "Você precisará de " + Math.ceil(re) + " latas de cerveja"


  mat_refri(criancas, adultos, idosos, horas)
}

function mat_refri (criancas, adultos, idosos, horas){
  let ra = criancas + adultos + idosos 
  let rb = ra * horas
  let re = rb /2

  let h2 = document.getElementById("resultado_refri")
  h2.innerText = "Você precisará de " + Math.ceil(re) + " latinhas de refrigerante"

  document.getElementById('resultado').classList.remove('esconder')
}
