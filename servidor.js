//init
const express = require("express");
const app = express();
// app.use(express.json)
// app.use(express.urlencoded({extended:true}))

// import
const Contenedor = require("./archivos");
const Item = require("./item");

//creo archivo que contiene los productos
const archivo = new Contenedor("./productos.txt");
const nuevoItem = new Item("Lapiz", "50", "imagenLapiz");

//server
const PORT = process.env.port || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

//rutas
//ruta productos
app.get("/productos", async (req, res) => {
  const productos = await archivo.getAll();
  res.send(JSON.stringify(productos, null, 10));
});

//ruta productos random
//aca debo llamar al metodo getByID(), eligiendo el id mediante Random
app.get("/productosRandom", async (req, res) => {
  //agregar async ??
  //agregar funcion numero random
  // console.log(getRandom(1,3))
  const random = await archivo.getRandom(0,3)
  const productoRandom = await archivo.getById(random)
  res.send(productoRandom);
});
