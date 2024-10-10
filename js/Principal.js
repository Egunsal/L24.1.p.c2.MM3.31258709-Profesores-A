import Cl_Fijo from "./Cl_Fijo.js";

let fijo1 = new Cl_Fijo("Carlos",25,100)


let salida = document.getElementById("salida")
salida.innerHTML ="Nombre del profesor fijo: "+fijo1.mostrarNombre();
salida.innerHTML +="<br>Monto del bono: "+fijo1.mostrarBono();
salida.innerHTML +="<br>Monto del sueldo: "+fijo1.mostarSueldo();
salida.innerHTML += "<br>Ingreso total del profesor "+fijo1.mostrarNombre()+": "+fijo1.sueldoTotal();
