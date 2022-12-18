const fs = require("fs");

////////////////////////////////
//      REGISTRAR
////////////////////////////////////

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const dato = { nombre, edad, tipo, color, enfermedad };
  let citas = [];

  if (fs.existsSync("./citas.json"))
    // Validar si El archivo EXISTE!
    citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  else {
    fs.writeFileSync("citas.json", JSON.stringify(citas));
    citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  }

  citas.push(dato);
  fs.writeFileSync("citas.json", JSON.stringify(citas));
};

/////////////////////////////////////
///LEER DATOS
/////////////////////////////////
const leer = () => {
  if (fs.existsSync("./citas.json")) {
    citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

    if (citas.length !== 0) {
      console.log("\nCITAS REGISTRADAS");
      console.table(citas);
    } else {
      console.log("Sin citas...");
    }
  } else {
    console.log("\nEl archivo no existe...\n");
  }
};

module.exports = { registrar, leer };
