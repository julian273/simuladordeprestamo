let usuario = prompt("Ingresa tu nombre");
const saludo = saludar(usuario)
let pedirPrestamos = Number(prompt("Pedi tu prestamo! \n Elegi la opcion : \n 1- 12 cuotas \n 2- 18 cuotas \n 3- 24 cuotas"));
let interes10 = 0.10;
let interes30 = 0.30;
let interes50 = 0.50
let cuotas = 0;
let total = 0;
let incorrecto = "Ingresaste un dato incorrecto"


if (usuario === "") {
    alert(saludo);
} else if (pedirPrestamos === 1) {
    alert("Con 12  cuotas tenes 10% de intereses");
    cuotas = Number(prompt("Cuanto vas a pedir?"));
    total = (cuotas * interes10) + cuotas;
    alert("Total a pagar es: " + total + "\n 12 cuotas de : $" + total / 12);

} else if (pedirPrestamos === 2) {
    alert("Con 18 cuotas tenes 30% de intereses");
    cuotas = Number(prompt("Cuanto vas a pedir?"));
    total = (cuotas * interes30) + cuotas;
    alert("Total a pagar es: " + total + "\n 18 cuotas de : $" + total / 18);
} else if (pedirPrestamos === 3) {
    alert("Con 24 cuotas tenes 50% de intereses");
    cuotas = Number(prompt("Cuanto vas a pedir?"));
    total = (cuotas * interes50) + cuotas;
    alert("Total a pagar es: " + total + "\n 24 cuotas de : $" + total / 24);
} else {
    alert(incorrecto);
};

function saludar() {

    alert("Bienvenido " + usuario);

}
