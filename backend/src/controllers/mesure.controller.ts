import { Request, Response } from 'express';
import { addMesureWithMouleAndPieces, getMesureService, updateMesureService } from '../services/mesure.service.js';

export const createMesure = async (req: Request, res: Response) => {
  try {
    const newMesure = await addMesureWithMouleAndPieces(req.body);
    res.status(201).json(newMesure);
  } catch (error) {
  console.error('Erreur création moule:', error);
  const errorMessage = error instanceof Error ? error.message : String(error);
  res.status(500).json({ error: 'Erreur lors de la création du mesure moule', details: errorMessage });
}
};

//get all mesures
export const getMesures = async (req: Request, res: Response) => {
  try {
    const mesures = await getMesureService();
    res.status(200).json(mesures);
  } catch (error) {
    console.error('Erreur récupération mesures:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des mesures' });
  }
};

export const updateMesure = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    const updatedMesure = await updateMesureService(Number(id), payload);
    res.status(200).json(updatedMesure);
  } catch (error) {
    console.error('Erreur mise à jour mesure:', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la mesure' });
  }
}