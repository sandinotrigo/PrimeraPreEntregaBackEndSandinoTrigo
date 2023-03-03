import * as fs from 'fs';

class ProductManager {
  #path = "./Products.json";
  #codeaccumulator= 0;

  async addProduct(title, description, price,thumbnail,code,stock) {
    const newProduct = {
        title, 
        description,
        price,
        thumbnail,
        code: this.#codeaccumulator, 
        stock,
    };

    const products = await this.getProducts();

    const updatedUsers = [...products, newProduct];

    await fs.promises.writeFile(this.#path, JSON.stringify(updatedUsers));
  }

  async getProducts() {
    try {
      const products = await fs.promises.readFile(this.#path, "utf-8");

      return JSON.parse(products);
    } catch (e) {
      return [];
    }
  }
  async hola() {
    const manager = new ProductManager();
  
    console.log(await manager.getProducts());
  
    await manager.addProduct(
      "Manzanas",
      "verdes",
      15,
      "no disponible",
      30
    );
  
    console.log(await manager.getProducts());
  }
}



export default ProductManager