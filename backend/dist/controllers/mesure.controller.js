import { addMesureWithMouleAndPieces } from '../services/mesure.service.js';
export const createMesure = async (req, res) => {
    try {
        const newMesure = await addMesureWithMouleAndPieces(req.body);
        res.status(201).json(newMesure);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création de la mesure' });
    }
};
//# sourceMappingURL=mesure.controller.js.map