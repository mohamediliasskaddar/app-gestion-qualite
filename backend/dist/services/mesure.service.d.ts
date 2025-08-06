/**
 * payload expected shape:
 * {
 *   reference: string,
 *   dateMesure: string (ISO date),
 *   taille?: string,
 *   mesuresMoules: [
 *     {
 *       mouleId: number,
 *       quota: number,
 *       margeInf: number,
 *       margeSup: number,
 *       unite: string,
 *       pieces: [ { numero: number, valeurPlateau1: number, valeurPlateau2?: number } ]
 *     }
 *   ]
 * }
 */
export declare function addMesureWithMouleAndPieces(payload: any): Promise<{
    mesuresMoules: ({
        moule: {
            reference: string;
            id: number;
            nbPlateaux: number;
        };
        pieces: {
            id: number;
            numero: number;
            valeurPlateau1: number;
            valeurPlateau2: number | null;
            mesureMouleId: number;
        }[];
    } & {
        id: number;
        quota: number;
        margeInf: number;
        margeSup: number;
        unite: string;
        mouleId: number;
        mesureId: number;
    })[];
} & {
    reference: string;
    dateMesure: Date;
    taille: string | null;
    id: number;
}>;
//# sourceMappingURL=mesure.service.d.ts.map