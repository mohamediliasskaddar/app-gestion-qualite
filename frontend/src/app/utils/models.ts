// app/utils/models.ts

/** Représente une campagne de mesure globale */
export interface IMesure {
  id: number;
  reference: string;     // ex: "HR:00047"
  dateMesure: string;    // ISO string, ex: "2025-08-03T14:00:00Z"
  taille?: string;       // ex: "20cm"
  mesuresMoules?: IMesureMoule[]; // Relation vers les moules mesurés
}

/** Représente un moule utilisé pour une mesure */
export interface IMoule {
  id: number;
  reference: string;     // ex: "M-A001"
  nbPlateaux: number;    // 1 ou 2
}

/** Paramètres de tolérance pour un moule dans une campagne */
export interface IMesureMoule {
  id?: number;
  mesureId?: number;     // FK vers IMesure.id
  mouleId: number;       // FK vers IMoule.id
  quota: number;         // valeur cible, ex: 10.0
  margeInf: number;      // tolérance -, ex: 0.3
  margeSup: number;      // tolérance +, ex: 0.3
  unite: string;         // ex: "mm"
  pieces?: IPiece[];     // Les pièces mesurées pour ce moule
}

/** Données de mesure pour une pièce individuelle */
export interface IPiece {
  id?: number;
  mesureMouleId?: number;  // FK vers IMesureMoule.id
  numero: number;          // n° de la pièce (1 à 100)
  valeurPlateau1: number;  // mesure plateau 1
  valeurPlateau2?: number; // mesure plateau 2 (si nbPlateaux = 2)
}
