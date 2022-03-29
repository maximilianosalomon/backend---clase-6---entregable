//init
const express = require("express");
const app = express();

//import
// const productos = require("./listaProductos");//original
const Contenedor = require("./archivos");
const Item = require("./item");

//creo archivo que contiene los productos
const archivo = new Contenedor("./productos.txt");
const nuevoItem = new Item("Lapiz", "50", "imagenLapiz");

//server
const PORT = process.env.port || 8080; //si uso 0(cero) toma un puerto al azar de los disponibles
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

//rutas
//ruta productos
app.get("/productos", (req, res) => {
  const productos = archivo.getAll();
  const productosString = JSON.stringify(productos, null, 10);
  res.send(productosString);

  // res.send("<h1>masi</h1>");
});
//ruta productos random
app.get("/productosRandom", (req, res) => {
  res.send("Respuesta Productos Random!!");
});
