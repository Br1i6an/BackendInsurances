import { Response } from "express";
import pool from "../../settings/conexion/conexionBD";

class seguroDetalles{
    protected static async detallePorId(sqlBuscar: string, params: any, res: Response): Promise<any> {
        await pool.one(sqlBuscar, params)
            .then((dato)=>{
                return res.status(200).json(dato);
            })
            .catch((miError)=>{
                console.log(miError);
                return res.status(400).json({answer: 'Error en la busqueda'});
            });
    }
}
export default seguroDetalles;