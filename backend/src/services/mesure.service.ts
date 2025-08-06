import { prisma } from '../prisma.js'

// Lit tous les mesures
export function getMesureService() {
  return prisma.mesure.findMany();
}


//update une mesure
export const updateMesureService = async (id: number, payload: any) => {
  // Assume payload.mesuresMoules is an array of new moules to add
  const { mesuresMoules, ...mesureFields } = payload;
  return prisma.mesure.update({
    where: { id },
    data: {
      ...mesureFields,
      mesuresMoules: {
        create: mesuresMoules.map((mm: any) => ({
          quota: mm.quota,
          margeInf: mm.margeInf,
          margeSup: mm.margeSup,
          unite: mm.unite,
          moule: { connect: { id: mm.mouleId } },
          pieces: {
            create: mm.pieces.map((p: any) => ({
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
};



// Crée une mesure avec moules et pièces
export async function addMesureWithMouleAndPieces(payload: any) {
  const { reference, dateMesure, taille, mesuresMoules } = payload
  return await prisma.mesure.create({
    data: {
      reference,
      dateMesure: new Date(dateMesure),
      taille,
      mesuresMoules: {
        create: mesuresMoules.map((mm: any) => ({
          quota: mm.quota,
          margeInf: mm.margeInf,
          margeSup: mm.margeSup,
          unite: mm.unite,
          moule: { connect: { id: mm.mouleId } },
          pieces: {
            create: mm.pieces.map((p: any) => ({
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
  })
}