module.exports.Product = class Product {
    constructor({
        id, 
        name = null,
        description = null,
        cover = null,
        price = null,
        ingredients = []
    }){
        this.id = id;
        this.name = name;
        this.description = description;
        this.cover = cover;
        this.price = price;
        this.ingredients = ingredients;
    }
}