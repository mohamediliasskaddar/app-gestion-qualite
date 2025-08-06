import { createMouleService } from '../services/moule.service.js';
export const createMoule = async (req, res) => {
    try {
        const { reference, nbPlateaux } = req.body;
        const newMoule = await createMouleService({ reference, nbPlateaux });
        res.status(201).json(newMoule);
    }
    catch (error) {
        console.error('Erreur création moule:', error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        res.status(500).json({ error: 'Erreur lors de la création du moule', details: errorMessage });
    }
};
//# sourceMappingURL=moule.controller.js.map