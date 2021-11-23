const { v4: uuid } = require('uuid');

const { inMemory } = require('../../database');

module.exports = {
  add: async (product) => {
    if (!product.id) {
      product.id = uuid();
    }
    inMemory.products.push(product);
    return product;
  },
  update: async (product) => {
    const index = inMemory.products.findIndex(
      (item) => item.id === product.id
    );
    if (index >= 0) {
      inMemory.products[index] = product;
      return inMemory.products[index];
    }
    return null;
  },
  delete: async (id) => {
    const index = inMemory.products.findIndex(
      (item) => item.id === id
    );
    if (index >= 0) {
      let product = inMemory.products[index];
      inMemory.products.splice(index, 1);
      return product;
    }
    return null;
  },
  getByID: async (id) => {
    return inMemory.products.find((item) => item.id === id);
  },
};
