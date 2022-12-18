
const { registrar, leer } = require("./operaciones.js");

const datosIngresados = process.argv.slice(2);

if (
  datosIngresados.length === 6 &&
  datosIngresados[0].toLowerCase() === "registrar"
) {
  registrar(
    datosIngresados[1],
    datosIngresados[2],
    datosIngresados[3],
    datosIngresados[4],
    datosIngresados[5]
  );
  console.log("\nCita creada...!\n");
} else if (
  datosIngresados.length === 1 &&
  datosIngresados[0].toLowerCase() === "leer"
) {
  leer();
} else {
  console.log(
    "\nError en operación ingresada: ",
    datosIngresados[0],
    "ó error cantidad de argumentos: ",
    datosIngresados.length,
    "\n"
  );
}
