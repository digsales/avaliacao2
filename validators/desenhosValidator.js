const predadoresValidator = {
  nome: {
    required: "Campo obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
};
export default predadoresValidator;
