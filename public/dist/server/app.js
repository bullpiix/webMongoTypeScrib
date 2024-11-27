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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importar cors
const db_1 = require("../db");
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)()); // Habilitar CORS para todas las rutas
app.use(express_1.default.json());
app.post("/guardar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, edad } = req.body;
    if (!nombre || !edad) {
        res.status(400).json({ error: "Nombre y edad son requeridos" });
        return;
    }
    try {
        const collection = (0, db_1.getUsuariosCollection)();
        const result = yield collection.insertOne({ nombre, edad, fecha: new Date() });
        res.status(201).json({ message: "Usuario guardado", id: result.insertedId });
    }
    catch (err) {
        console.error("Error al guardar el usuario:", err);
        res.status(500).json({ error: "Error al guardar los datos en la base de datos" });
    }
}));
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
