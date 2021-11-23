const {v4: uuid} = require("uuid")

const {inMemory} = require("../../database")

module.exports = {
    add: async ingredient => {
        if (!ingredient.id) {
            ingredient.id = uuid();
        }
        inMemory.ingredients.push(ingredient);
        return ingredient;
    },
    update: async ingredient => {
        const index = inMemory.ingredients.findIndex(item => item.id === ingredient.id);
        if (index >= 0) {
            inMemory.ingredients[index] = ingredient;
            return inMemory.ingredients[index];
        }
        return null;
    },
    delete: async ingredient => {
        const index = inMemory.ingredients.findIndex(item => item.id === ingredient.id);
        if (index >= 0) {
            inMemory.ingredients.splice(index, 1);
            return ingredient;
        }
        return null;
    },
    getByID: async id => {
        return inMemory.ingredients.find(item => item.id === id);
    },
}