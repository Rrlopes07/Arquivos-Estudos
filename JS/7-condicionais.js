console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log(`Destinos possíveis: ${listaDeDestinos}`);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

const idadeComprador = 20;
const estaAcompanhada = false;
const temPassagemComprada = true;

// if (idadeComprador >= 18 || estaAcompanhada) {
//     console.log("Boa viagem!")
//     listaDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}