var name = "Julian";
var edad = 18;
var concatenar = name + " " + edad;
/*document.write(name);
document.write(edad);
document.write(concatenar); se emplea para mostrar en pantalla y es poco optimo para js*/
var datos = document.getElementById("datos");
datos.innerHTML =`<h1> Hola, mi nombre es: ${name} </h1> <h2> y tengo: ${edad} años </h2>`;

if (edad >= 18) {
    datos.innerHTML += `<h3> Soy mayor de edad </h3>`;
} else {
    datos.innerHTML += `<h3> No soy mayor de edad </h3>`;
}