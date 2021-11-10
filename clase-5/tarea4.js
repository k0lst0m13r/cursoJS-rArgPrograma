const NUMEROS = document.querySelectorAll("li");
let numList = [];
let sumaNum = 0;

for (let i = 0; i < NUMEROS.length; i++) {
  numList.push(Number(NUMEROS[i].innerText));
  sumaNum += (Number(NUMEROS[i].innerText));
}
let numMayor = numList[0];
let numMenor = numList[0];
for (let i = 0; i < numList.length; i++) {

  if (numMayor <= numList[i]) {
    numMayor = numList[i]
  }
  if (numMenor >= numList[i]) {
    numMenor = numList[i]
  }
}


const PROMEDIO = sumaNum / NUMEROS.length
document.querySelector("#promedio").innerText = `El promedio es: ${PROMEDIO}`;
document.querySelector("#menor").innerText = `El número mas pequeño es: ${numMenor}`;
document.querySelector("#mayor").innerText = `El número mas grande es: ${numMayor}`;
console.log(sumaNum);
console.log(numList);
console.log(PROMEDIO);
