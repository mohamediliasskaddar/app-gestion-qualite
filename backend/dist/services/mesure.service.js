import { prisma } from '../prisma.js';
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
export async function addMesureWithMouleAndPieces(payload) {
    const { reference, dateMesure, taille, mesuresMoules } = payload;
    return await prisma.mesure.create({
        data: {
            reference,
            dateMesure: new Date(dateMesure),
            taille,
            mesuresMoules: {
                create: mesuresMoules.map((mm) => ({
                    quota: mm.quota,
                    margeInf: mm.margeInf,
                    margeSup: mm.margeSup,
                    unite: mm.unite,
                    moule: { connect: { id: mm.mouleId } },
                    pieces: {
                        create: mm.pieces.map((p) => ({
                            numero: p.numero,
                            valeurPlateau1: p.valeurPlateau1,
                            valeurPlateau2: p.valeurPlateau2 ?? null
                        }))
                    }
                }))
            }
        },
        include: {
            mesuresMoules: {
                include: { moule: true, pieces: true }
            }
        }
    });
}
//# sourceMappingURL=mesure.service.js.map