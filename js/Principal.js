import Cl_Contratado from "./Cl_Contratado.js";
import Cl_Fijo from "./Cl_Fijo.js";

let fijo1 = new Cl_Fijo("Carlos",25,100)


let salida = document.getElementById("salida")
salida.innerHTML = "Ingreso total del profesor "+fijo1.mostrarNombre()+": "+fijo1.sueldoTotal();