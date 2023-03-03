import express from "express";
import ProductManager from "./productsManager.js";

app = express();

app.get ("/products", async (req, res) =>{
    const productssv = await  manager.getProducts();
    res.send(productssv)
});

app.listen(8080, () =>{
    console.log("puerto nuevo");
})
