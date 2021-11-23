module.exports.Ingredient = class Ingredient {
    constructor({
        id, 
        name = null,
        description = null,
        quantity = 0,
        provider = null
    }){
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.provider = provider;
    }
}