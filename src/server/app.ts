
import express from "express";
import cors from "cors"; // Importar cors
import { connectDB, getUsuariosCollection } from "../db";

const app = express();
const PORT = 5000;

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json());

app.post("/guardar", async (req, res) => {
  const { nombre, edad } = req.body;

  if (!nombre || !edad) {
    res.status(400).json({ error: "Nombre y edad son requeridos" });
    return;
  }

  try {
    const collection = getUsuariosCollection();
    const result = await collection.insertOne({ nombre, edad, fecha: new Date() });

    res.status(201).json({ message: "Usuario guardado", id: result.insertedId });
  } catch (err) {
    console.error("Error al guardar el usuario:", err);
    res.status(500).json({ error: "Error al guardar los datos en la base de datos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
