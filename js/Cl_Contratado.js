import Cl_Profesor from "./Cl_Profesor.js";
export default class Cl_Contratado extends Cl_Profesor{
    constructor(nombre,sueldo,horas){
       super(nombre,sueldo)
       this.horas = horas;      
    }
    get horas(){
        return this._horas;
    }
    set horas(h){
        this._horas = +h;
    }
    sueldoTotal(){
        return this.horas*10;
    }
}