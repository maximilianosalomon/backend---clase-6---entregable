const fs = require("fs");

//class
class Contenedor {
  constructor(nombreArchivo) {
    this.fileName = nombreArchivo;
  }
  //metodos
  //escribir
  async writeFile(data) {
    try {
      const contenido = await fs.promises.writeFile(this.fileName, data);
      console.log("Creado!");
      return contenido;
    } catch (error) {
      console.log("No se pudo guardar el archivo", error);
    }
  }
  //leer todo
  async getAll() {
    try {
      const archivo = await fs.promises.readFile(this.fileName, "utf-8");
      const contenido = JSON.parse(archivo);
      console.log("Obtenido!");
      console.log(contenido);
      return contenido;
    } catch (error) {
      ("No se pudo leer el archivo!");
    }
  }
  //guardar
  async save(data) {
    try {
      // console.log(data);//OK
      const contenido = await this.getAll(); //OK
      let nuevoId = contenido[contenido.length - 1].id + 1; //OK
      let nuevoItem = { ...data, id: nuevoId };
      contenido.push(nuevoItem);
      let contenidoString = JSON.stringify(contenido);
      await this.writeFile(contenidoString);
      return nuevoId;
    } catch (error) {
      console.log("No se pudo guardar el archivo", error);
    }
  }
  //leer x id
  async getById(id) {
    try {
      // const contenido = await this.getAll(); //al usarlo no me ejecuta lo de este metodo
      // const contenidoParse = JSON.parse(contenido); //al usarlo no me ejecuta lo de este metodo
      const archivo = await fs.promises.readFile(this.fileName, "utf-8");
      const contenidoParse = JSON.parse(archivo);
      const item = contenidoParse.filter((e) => e.id === id);
      console.log("Obtenido x id!");
      console.log(item);
      return item;
    } catch (error) {
      ("No se pudo leer el archivo x id!");
    }
  }
  //borrar por ID
  async deleteById(id) {
    try {
      const archivo = await fs.promises.readFile(this.fileName, "utf-8");
      const contenidoParse = JSON.parse(archivo);
      const items = contenidoParse.filter((e) => e.id !== id);
      const contenidoNuevo = await fs.promises.writeFile(
        this.fileName,
        JSON.stringify(items)
      );
      console.log("Borrado x id!");
      return contenidoNuevo;
    } catch (error) {
      ("No se pudo leer el archivo x id!");
    }
  }
  //borrar todo
  async deleteAll() {
    const items = [];
    await this.writeFile(items);
  }
}

module.exports = Contenedor;
