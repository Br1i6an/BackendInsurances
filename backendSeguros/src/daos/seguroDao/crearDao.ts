import { Response } from 'express';
import pool from "../../settings/conexion/conexionBD";

class SegurosCrear{
    public static async crearSeguro( sqlCrear: string, sqlConfirmar:string, param: any, res: Response): Promise<any> {
        await pool
            .task(async consultar => {
                //Consultas
                const dato = await consultar.one(sqlConfirmar, param);
                if (dato.amount == 0) {
                    return await consultar.one(sqlCrear, param);
                } else {
                    return { codseguro: 0 };
                }
            })
            .then((response) => {
                if (response.codseguro != 0) {
                    res.status(200).json({ OK: 'Seguro creado', newCode: response.codseguro });
                } else {
                    res.status(402).json({ ERROR: 'Error, repetido' })
                };
            })
            .catch((meErr) => {
                console.log('Error en daos: ', meErr);
                res.status(400).json({ answer: 'Error creando.' });
            });
    } 
}
export default SegurosCrear;