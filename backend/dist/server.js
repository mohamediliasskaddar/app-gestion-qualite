import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mesureRoutes from './routes/mesure.routes.js';
import mouleRoutes from './routes/moule.routes.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/mesures', mesureRoutes);
app.use('/api/moules', mouleRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map