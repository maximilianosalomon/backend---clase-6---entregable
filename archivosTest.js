//import
const Contenedor = require("./archivos");
const Item = require("./item");

//creo archivo que contiene los productos
const contenedor = new Contenedor("./productos.txt");
const nuevoItem = new Item("Lapiz", "50", "imagenLapiz");
/*----Metodos----*/
// contenedor.writeFile("Nuevo producto");//OK
contenedor.getAll(); //OK
// contenedor.save(nuevoItem);//OK
// contenedor.deleteAll();//OK

/*----Metodos x ID----*/
// contenedor.getById(2); //OK
// contenedor.deleteById(2); //OK
