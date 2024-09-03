import { opcionesPG } from "./opcionesConexion";
import var_database from "../dominios/var_database";
import pgPromise from "pg-promise";

const pgp = pgPromise(opcionesPG);
const pool = pgp(var_database);
console.log("llega");
pool
  .connect()
  .then((conn) => {
    console.log("Entra a la base de datos: ", var_database.database);
    conn.done();
  })
  .catch((meErr) => {
    console.log(meErr);
  });

export default pool;