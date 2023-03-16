// Capturar  el precio ingresado por usuario
const precio = document.querySelector("#price-tag");
console.log(precio);

// B. Capturar el nombre del cupón (texto) ingresado por el usuario.
const cupon = document.querySelector("#cupon");
console.log(cupon.value);

// C. Capturar el botón “Aplicar Cupón”. Además, lo asociamos a un evento de click y una tarea que debe realizar cuando el usuario presione dicho botón.
const botonCalcular = document.querySelector(".button-calcule");
botonCalcular.addEventListener("click", aplicarCupon);

// D. Capturar el botón “Limpiar”. Además, lo asociamos a un evento de click y una tarea que debe realizar cuando el usuario presione dicho botón.

const botonReset = document.querySelector(".button-reset");
botonReset.addEventListener("click", limpiarFormulario);

// E. Capturar el elemento para mostrar el resultado.
const resultadoFinal = document.querySelector(".resultado");
console.log(resultadoFinal);

// F. Capturar el elemento para mostrar la advertencia en caso haya campos vacíos.
const resultadoFinalAdv = document.querySelector(".inactive-warning")

// G. Capturar el elemento para mostrar el descuento aplicado.
const discountFinal = document.querySelector(".discount-final");





