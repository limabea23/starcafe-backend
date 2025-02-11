const Product = require("../models/Product");
const ProductList = require("../models/ProductList");

const menu = new ProductList();

const produto1 = new Product('Brigadeiro', 'R$5', 'Feito com leite condensado, chocolate em pó, manteiga e finalizado com granulado tradicional', 'Doces');
lista.addProduct(produto1);

const produto2 = new Product('Brigadeiro de Ninho', 'R$10', 'Feito com leite condensado, leite ninho, manteiga e finalizado com granulado granulado colorido', 'Doces');
lista.addProduct(produto2);

const produto3 = new Product('Brigadeiro de Morango', 'R$8', 'Feito com leite condensado, nesquik, manteiga e finalizado com granulado granulado colorido', 'Doces');
lista.addProduct(produto3); //parei aqui