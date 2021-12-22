
function hrs() {
  let hora = document.getElementsByClassName ("op")[4]

  hr = hora.value;

  mat_carne(hr)
}


  function mat_carne(hr) {
    let crian = document.getElementsByClassName ("op")[1]
    let adul = document.getElementsByClassName ("op")[2]
    let ido = document.getElementsByClassName ("op")[3]
    let horas = document.getElementsByClassName ("op")[4]

    var crianças = crian.value * 0.5
    var adultos = adul.value * 0.9
    var idosos = ido.value * 0.8


   let ra = crianças + adultos + idosos 
   let rb = ra * hr
   let re = rb /2

    let h2 = document.getElementById ("resultado_carne")
    h2.innerText = "Você precisará de " + Math.ceil(re) + " Kg de carne"
    
  mat_cerveja(hr)

}

function mat_cerveja(hr) {

  let crian = document.getElementsByClassName ("op")[1]
  let adul = document.getElementsByClassName ("op")[2]
  let ido = document.getElementsByClassName ("op")[3]

  crianças = crian.value * 0
  adultos = adul.value * 5
  idosos = ido.value * 2

  let ra = crianças + adultos + idosos 
  let rb = ra * hr
  let re = rb /2


  let h2 = document.getElementById ("resultado_cerveja")
  h2.innerText = "Você precisará de " + Math.ceil(re) + " latas de cerveja"


  mat_refri(hr)
}

function mat_refri (hr){

  let crian = document.getElementsByClassName ("op")[1]
  let adul = document.getElementsByClassName ("op")[2]
  let ido = document.getElementsByClassName ("op")[3]

  crianças = crian.value * 3
  adultos = adul.value * 2
  idosos = ido.value * 1

  let ra = crianças + adultos + idosos 
  let rb = ra * hr
  let re = rb /2

  let h2 = document.getElementById ("resultado_refri")
  h2.innerText = "Você precisará de " + re + " latinhas de refrigerante"

  document.getElementById('resultado').classList.remove('esconder')
}
