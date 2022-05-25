console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
//console.log(`Destinos possíveis: ${salvador}, ${saoPaulo} e ${rioDeJaneiro}.`)
console.log(`Destinos possíveis: ${listaDeDestinos}`);

// adicionando um item à lista
listaDeDestinos.push(`Curitiba`);

console.log(`Destinos possíveis: ${listaDeDestinos}`);

listaDeDestinos.splice(1, 1);

console.log(`Destinos possíveis: ${listaDeDestinos}`);
console.log(listaDeDestinos[1], listaDeDestinos[0]);
