
async function guardarDatos(nombre: string, edad: number) {
  try {
    const response = await fetch("http://localhost:5000/guardar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, edad }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Usuario guardado:", data);
    } else {
      console.error("Error del servidor:", data.error);
    }
  } catch (err) {
    console.error("Error de conexión:", err);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que la página se recargue
      console.log("Formulario enviado");
      const nombreInput = document.getElementById("nombre") as HTMLInputElement;
      const edadInput = document.getElementById("edad") as HTMLInputElement;

      if (nombreInput && edadInput) {
        const nombre = nombreInput.value;
        const edad = parseInt(edadInput.value, 10);

        console.log(`Nombre: ${nombre}, Edad: ${edad}`);
        guardarDatos(nombre, edad);
      }
    });
  }
});
