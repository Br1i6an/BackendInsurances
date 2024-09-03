import { SQL_PLAN_DETALLES } from "../../repositories/repoPlan/planDetalles";
import { Request, Response } from "express";
import PlanDetalles from "../../daos/planDao/detalleDao";

class PlanControllerDetalles extends PlanDetalles {
  public DetallesUno(req: Request, res: Response): void {
    const codplan = req.params.codplan;
    const parametro = [codplan];
    
    PlanControllerDetalles.detallePorId(
        SQL_PLAN_DETALLES.DETALLES,
      parametro,
      res
    );
  }
}
const planControllerDetalles = new PlanControllerDetalles();
export default planControllerDetalles;