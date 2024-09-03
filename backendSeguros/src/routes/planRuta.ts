import { Router } from 'express';
import planControllerCrear from '../controllers/planController/createController';
import planControllerDetalles from '../controllers/planController/detalleController';

class PlanRutas{
    public rutasApiPlanes: Router;
    constructor(){
        this.rutasApiPlanes = Router();
        this.setting();
    }
    public setting(){
        this.rutasApiPlanes.post( "/create", planControllerCrear.crearPlan );
        this.rutasApiPlanes.get( "/details/:codseguro", planControllerDetalles.DetallesUno );
    }

}
const planRutas = new PlanRutas();
export default planRutas.rutasApiPlanes;