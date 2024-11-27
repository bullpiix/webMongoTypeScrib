"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function guardarDatos(nombre, edad) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:5000/guardar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, edad }),
            });
            const data = yield response.json();
            if (response.ok) {
                console.log("Usuario guardado:", data);
            }
            else {
                console.error("Error del servidor:", data.error);
            }
        }
        catch (err) {
            console.error("Error de conexión:", err);
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita que la página se recargue
            console.log("Formulario enviado");
            const nombreInput = document.getElementById("nombre");
            const edadInput = document.getElementById("edad");
            if (nombreInput && edadInput) {
                const nombre = nombreInput.value;
                const edad = parseInt(edadInput.value, 10);
                console.log(`Nombre: ${nombre}, Edad: ${edad}`);
                guardarDatos(nombre, edad);
            }
        });
    }
});
