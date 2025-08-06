import type  { Request, Response } from 'express';
import { createMouleService, getMouleByIdService, getMoulesService  } from '../services/moule.service.js';


// GET /api/moules
export async function getMoules(req: Request, res: Response) {
  try {
    const moules = await getMoulesService();
    return res.json(moules);
  } catch (err: any) {
    console.error('getMoules error:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}


// to add a new mold
export const createMoule = async (req: Request, res: Response) => {
  try {
    const { reference, nbPlateaux } = req.body;
    const newMoule = await createMouleService({ reference, nbPlateaux });
    res.status(201).json(newMoule);
  } catch (error) {
  console.error('Erreur création moule:', error);
  const errorMessage = error instanceof Error ? error.message : String(error);
  res.status(500).json({ error: 'Erreur lors de la création du moule', details: errorMessage });
}
};

// get mold by id  at controller          
export const getMouleById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string , 10);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID invalide' });
  }

  try {
    const moule = await getMouleByIdService(id);
    if (!moule) {
      return res.status(404).json({ message: 'Moule non trouvé' });
    }
    return res.json(moule);
  } catch (err: any) {
    console.error('getMouleById error:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};


