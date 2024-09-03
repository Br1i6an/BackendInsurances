import { Router } from 'express';
import seguroControllerCrear from '../controllers/seguroController/createController';
import seguroControllerDetalles from '../controllers/seguroController/detallesController';

class SegurosRutas{
    public rutasApiSeguros: Router;
    constructor(){
        this.rutasApiSeguros = Router();
        this.setting();
    }
    public setting(){
        this.rutasApiSeguros.post( "/create", seguroControllerCrear.crearSeguro );
        this.rutasApiSeguros.get( "/details/:codseguro", seguroControllerDetalles.DetallesUno );
    }

}
const segurosRutas = new SegurosRutas();
export default segurosRutas.rutasApiSeguros;