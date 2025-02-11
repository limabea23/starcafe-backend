const Product = require("./Product");

class ProductList {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(nome, valor, descricao, categoria) {
        const newProduct = new Product(this.nextId++, nome, valor, descricao, categoria);
        this.products.push(newProduct);
        return newProduct
    }
    
    listProduct() {
        return this.product;
    }
    
    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
    
    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            return this.products.splice(index, 1) [0];
        }
        return null;
    }
    
    updateProduct(id, updateData) {
        const product = this.getProductById(id);
        if (!livro) return null;
        Object.assign(product, updateData);
        return product;
    }
}

module.exports = new ListProduct();