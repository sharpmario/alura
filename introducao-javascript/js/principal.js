var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var gordura = paciente.querySelector(".info-gordura").textContent;

console.log(peso, altura, gordura);

var imc = peso / (altura * altura);

console.log(imc);

paciente.querySelector(".info-imc").textContent = imc;