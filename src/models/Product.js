const { v4: uuid4 } = require("uuid");
class Product {
    constructor(nome, valor, descricao, categoria) {
        this.id = uuid4();
        this.nome = nome;
        this.valor = valor;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}

module.exports = Product;