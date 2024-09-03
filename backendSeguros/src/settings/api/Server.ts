import cors from "cors";
import morgan from "morgan";
import express from "express";

import SegurosRoutes from "../../routes/segurosRuta";
import PlanRoutes from "../../routes/planRuta";
import segurosRuta from "../../routes/segurosRuta";


class Server {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.startSetting();
        this.activeRoute();
    }

    public startSetting(): void{
        this.app.set("PORT", 5432);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit:"100mb"}));
        this.app.use(express.urlencoded({extended:true}));
    }

    public activeRoute():void{
        this.app.use('/api/public',     segurosRuta);
        this.app.use('/api/private/person', PlanRoutes);
    }

    public start(): void {
        this.app.listen(this.app.get("PORT"),()=>{
            console.log("Funciona", this.app.get("PORT"));
        });
    }
}
export default Server;