import { SQL_PLAN_CREAR } from "../../repositories/repoPlan/planCrear";
import { Request, Response } from "express";
import planCrear from "../../daos/planDao/crearDao";

class PlanControllerCrear extends planCrear {
  public crearPlan(req: Request, res: Response): void {
    const plancode = req.body.typeCourse;
    const price = req.body.price;
    const parameter = [plancode, price];

    PlanControllerCrear.crearPlan(
      SQL_PLAN_CREAR.CREAR,
      SQL_PLAN_CREAR.CONSULTARPLAN,
      parameter,
      res
    );
  }
}
const planControllerCrear = new PlanControllerCrear();
export default planControllerCrear;
