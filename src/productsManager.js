class ProductManager {
  //se crea la clase Manager
 //definimos productos como un arreglo vacio

  products = [];
  #codeaccumulator = 0;

  addProduct(title, description, price, thumbnail, id, stock) { //addProduct agregara el producto en el array products
    
    const nuevoProducto = { //propiedades a ingresar del producto
      
      title, 
      description,
      price,
      thumbnail,
      id: this.#codeaccumulator,
      stock,
    };

    const alreadyExists = this.products.some((p) => p.id === id);//se busca el id para retornarlo como valor booleano

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
    //Este metodo se encarga de retornar todos los productos
    return this.products;
  }

  getProductsbyId(id){ //obtener solamente el producto que coincida su code con el id ingresada por el manager
    const idIngresada = {id: this.#codeaccumulator,}
                        
    const code = this.#codeaccumulator;
    
    const buscarId = this.products.find( (p) => p.id === id); //se busca en el array products con find (some no porque arroja booleanos)
      

    

    if(buscarId===idIngresada){
      throw console.log("El producto es el siguiente" + buscarId); //Si el id ingresada coincide con lo que esta en code  se ejecuta
    }
  }
}

const manager = new ProductManager();

manager.addProduct("manzana", "fruta", 10, "imagen", "1", 10);
manager.addProduct("banana","fruta" ,100,"no","2",10);
console.log(manager.getProductsbyId(1));

