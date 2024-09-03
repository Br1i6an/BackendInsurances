import { SQL_SEGURO_CREAR } from "../../repositories/repoSeguro/seguroCrear";
import { Request, Response } from "express";
import seguroCrear from "../../daos/seguroDao/crearDao";

class SeguroControllerCrear extends seguroCrear {
  public crearSeguro(req: Request, res: Response): void {
    const codseguro = req.body.typeCourse;
    const price = req.body.price;
    const parameter = [codseguro, price];

    SeguroControllerCrear.crearSeguro(
      SQL_SEGURO_CREAR.CREAR,
      SQL_SEGURO_CREAR.CONFIRMARSEGURO,
      parameter,
      res
    );
  }
}
const seguroControllerCrear = new SeguroControllerCrear();
export default seguroControllerCrear;
