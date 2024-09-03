import { SQL_SEGURO_DETALLES } from "../../repositories/repoSeguro/seguroDetalles";
import { Request, Response } from "express";
import SeguroDetalles from "../../daos/seguroDao/detalleDao";

class SeguroControllerDetalles extends SeguroDetalles {
  public DetallesUno(req: Request, res: Response): void {
    const codseguro = req.params.codseguro;
    const parametro = [codseguro];
    
    SeguroControllerDetalles.detallePorId(
        SQL_SEGURO_DETALLES.DETALLES,
      parametro,
      res
    );
  }
}
const seguroControllerDetalles = new SeguroControllerDetalles();
export default seguroControllerDetalles;