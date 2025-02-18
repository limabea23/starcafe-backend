const Product = require("./Product");

class ProductMenu {
    constructor() {
        this.products = [];
    }

    addProduct(newProduct) {
        this.products.push(newProduct);
    }
    
    getAllProducts() {
        return this.products;
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
        Object.assign(product, updateData);
        return product;
    }
}

module.exports = ProductMenu;