const fs = require("fs")

class ProductManager {
  
  #path = "./products.json"

  /*constructor(path){
    this.#path=path;
  }*/
  

  async addProduct(title, description, price, thumbnail, code, stock) { 
    let codeaccumulator=0;
    const newProduct = { 
      id:codeaccumulator++,
      title, 
      description,
      price,
      thumbnail,
      code, 
      stock,
    };
    
    const products = await this.getProducts();

    const updatedProducts = [...products,newProduct];

    await fs.promises.writeFile (this.#path, JSON.stringify(updatedProducts))
  }

  async getProducts() {
   try{
    const products = await fs.promises.readFile(this.#path, "utf-8");

    return JSON.parse(products)
   }
   catch(e) { return []}
  }

  
  async getProductsbyid(id){
    try {
      const products = await this.getProducts();
      
      const idfind= products.find((p) =>p.id ===id);

      if (idfind) {
        return idfind
      }
    }
    catch (error) {
      return "error1"
    }
    
  }


  async updateProductInfo(id,infoUpdate){}


  async deleteProduct(id){
    try{
    const products = await this.getProducts();//para leer los productos
    const idfind= products.find((p) =>p.id ===id);}//para rastrear en base a su id
    
    
    if (idfind) {
      return idfinds
    }
   

  }

  catch(error){
    return "error"
  }
}









async function main() {
  const manager = new ProductManager();
  
  console.log(await manager.getProducts());

  await manager.addProduct(
    "bananas",
    "fruta",
    20,
    "nophoto",
    "asdsad",
    "20"
  );
  /*await manager.addProduct(
    "bananas",
    "fruta",
    20,
    "nophoto",
    "asdsad",
    "20"
  )*/
  console.log(await manager.getProductsbyid(1));

}

main()

