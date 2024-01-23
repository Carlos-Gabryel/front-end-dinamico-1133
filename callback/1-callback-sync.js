const executaOperação = (numero1, numero2, operacaoCallBack) => {
  const resultado = operacaoCallBack(numero1, numero2);
  return resultado;
};

const soma = (numero1, numero2) => {
  return numero1 + numero2;
};
const subtracao = (numero1, numero2) => {
  return numero1 - numero2;
};
const multiplicacao = (numero1, numero2) => {
  return numero1 * numero2;
};
const divisao = (numero1, numero2) => {
  return numero1 / numero2;
};

const concatena = (string1, string2) => {
  return `${string1}${string2}`;
};

const resultadoSoma = executaOperação(10, 20, soma);
const resultadoSubtracao = executaOperação(10, 20, subtracao);
