class ProductManager {
  products = [];
  #codeaccumulator = 0;

  addProduct(title, description, price, thumbnail, code, stock) { 
    
    const nuevoProducto = { 
      id:this.#codeaccumulator,
      title, 
      description,
      price,
      thumbnail,
      code, 
      stock,
    };

    const alreadyExists = this.products.some((p) => p.code === code);

    if (alreadyExists) {
      throw new Error("Producto o codigo repetido " );
    }
    if (!title || !description || !price ||!thumbnail||!stock) {
      throw new Error("Error, datos erroneos");
    }

    this.#codeaccumulator++; //esto es lo mismo que poner +1
    this.products = [...this.products, nuevoProducto];
  }

  getProducts() {
    return this.products;
  }

  getProductsbyId(id){
    const idIngresada = {id,}
                        
    //const id = this.#codeaccumulator;
    
    const buscarId = this.products.find( (products) => products.id === id); 
      

    

    if(buscarId===idIngresada){
      throw console.log("El producto es el siguiente" + buscarId); 
    }
  }
}

const manager = new ProductManager();

manager.addProduct("manzana", "fruta", 10, "imagen", "1a", 10);
manager.addProduct("banana","fruta" ,100,"no","2a",10);
console.log(manager.getProductsbyId(1));
console.log(manager.getProducts());
