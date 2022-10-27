class Product {
    constructor(id, type, name, version, price, description, sku) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
        this.price = price;
        this.description = description;
        this.sku = sku;
    }
}

module.exports = Product;