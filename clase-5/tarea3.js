const horas = [];
const minutos = [];
const segundos = [];
let horasParcial = 0;
let minutosParcial = 0;
let segundosParcial = 0;

document.querySelector("#cargar").onclick = function(){
  horas.push(Number(document.querySelector("#horas").value));
  minutos.push(Number(document.querySelector("#minutos").value));
  segundos.push(Number(document.querySelector("#segundos").value));
  document.querySelector("#horas").value = ""
  document.querySelector("#minutos").value = ""
  document.querySelector("#segundos").value = ""

  return false;
}

document.querySelector("#calcular").onclick = function(){
  for (let i = 0; i < horas.length; i++) {
    horasParcial += horas[i];
  }
  for (let i = 0; i < minutos.length; i++) {
    minutosParcial +=  minutos[i];
  }
  for (var i = 0; i < segundos.length; i++) {
    segundosParcial += segundos[i];
  }

  const segundosTotal = segundosParcial % 60;
  const minutosTotal = (minutosParcial + Math.floor(segundosParcial/60)) % 60;
  const horasTotal = horasParcial + Math.floor(minutosParcial/60) + Math.floor(segundosParcial/3600);

  document.querySelector('#total').innerText = `Tiempo total: ${horasTotal} Horas, ${minutosTotal} Minutos y ${segundosTotal} Segundos`

  return false;
}
