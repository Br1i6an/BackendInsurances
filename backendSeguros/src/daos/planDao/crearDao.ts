import { Response } from 'express';
import pool from "../../settings/conexion/conexionBD";

class PlanCrear{
    public static async crearPlan( sqlCrear: string, sqlConfirmar:string, param: any, res: Response): Promise<any> {
        await pool
            .task(async consultar => {
                //Consultas
                const dato = await consultar.one(sqlConfirmar, param);
                if (dato.amount == 0) {
                    return await consultar.one(sqlCrear, param);
                } else {
                    return { codplan: 0 };
                }
            })
            .then((response) => {
                if (response.codseguro != 0) {
                    res.status(200).json({ OK: 'Plan creado', newCode: response.codseguro });
                } else {
                    res.status(402).json({ ERROR: 'Error, repetido' })
                };
            })
            .catch((meErr) => {
                console.log('Error en dao: ', meErr);
                res.status(400).json({ answer: 'Error creando.' });
            });
    } 
}
export default PlanCrear;