const Product = require("../models/Product");
const ProductList = require("../models/ProductList");

const menu = new ProductList();

const produto1 = new Product('Brigadeiro', 'R$5', 'Feito com leite condensado, chocolate em pó, manteiga e finalizado com granulado tradicional', 'Doces');
lista.addProduct(produto1);

const produto2 = new Product('Brigadeiro de Ninho', 'R$10', 'Feito com leite condensado, leite ninho, manteiga e finalizado com granulado granulado colorido', 'Doces');
lista.addProduct(produto2);

const produto3 = new Product('Brigadeiro de Morango', 'R$8', 'Feito com leite condensado, nesquik, manteiga e finalizado com granulado granulado colorido', 'Doces');
lista.addProduct(produto3);

const router = {
    addProduct: (req, res) => {
        try {
            const { nome, valor, descricao, categoria } = req.body;
            if(!nome || !valor || !descricao) {
                throw new Error('Preencha todos os campos :/')
            }
            const product = new Product(nome, valor, descricao, categoria)
            lista.addProduct(product);
            res.status(200).json({message: "Criado com sucesso :)"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar filme :(", error});
        }
    },

    getAllProducts: (req, res) => {
        try {
            const products = lista.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar produtos :(", error});
        }
    },

    getProductById: (req, res) => {
        try {
            const id = req.parms.id;
            res.status(200).json(lista.getProductById(id));
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar produto por id :(", error});
        }
    },

    updateProduct: (req, res) => {
        try {
            res.status(200).json(lista.updateProduct(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({message: "Erro ao atualizar produto :(", error});
        }
    },

    deleteProduct: (req, res) => {
        try {
            lista.deleteProduct(req.params.id);
            res.status(200).json({message: "Produto deletado com sucesso :)"});
        } catch (error) {
            res.status(404).json({message: "Erro ao deletar filme :(", error});
        }
    },
};

module.exports = router; 