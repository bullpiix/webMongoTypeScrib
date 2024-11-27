
import { MongoClient } from 'mongodb';

// URL de conexión de MongoDB Atlas (reemplaza con la que obtuviste)
const uri = "mongodb+srv://venecachera122:venecachera122@cluster0.icf56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
  }
};

// Conexión a la colección
export const getUsuariosCollection = () => {
  return client.db("manuBata").collection("manuCollect");
};



