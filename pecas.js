var listadepecas = ["peca1", "peca2", "peca3"];

console.log("Quantidade de peças");

if (listadepecas.length <= 10) {
  console.log("As peças podem ser cadastradas");
}

console.log("Quantidade de caracteres");

for (let index = 0; index < listadepecas.length; index++) {
  const pecaAtual = listadepecas[index];
  if (pecaAtual.length < 3) {
    console.log(
      pecaAtual +
        ": a peça possui nome inferior a 3 caracteres e não pode ser cadastrada"
    );
  } else {
    console.log(pecaAtual + ": a peça pode ser cadastrada");
  }
}

console.log("peso da peca");
const pesodapecaemgr = 50;

if (pesodapecaemgr >= 100) {
  console.log("peso suficiente");
} else {
  console.log("peso insuficiente");
}
