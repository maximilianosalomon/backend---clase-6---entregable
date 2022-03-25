//init
const express = require("express");
const app = express();

//import
const productos = require("./listaProductos");

//server
const PORT = 8080; //si uso 0(cero) toma un puerto al azar de los disponibles
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

//rutas
//ruta productos
app.get("/productos", (req, res) => {
  res.send(JSON.stringify(productos, null, 10));
});
//ruta productos random
app.get("/productosRandom", (req, res) => {
  res.send("respuesta");
});

////DE LA CLASE 6
// app.get("/fyh", (req, res) => {
//   res.send({ fyh: new Date().toLocaleString() });
// });
