import { prisma } from '../prisma.js';

interface CreateMouleInput {
  reference: string;
  nbPlateaux: number;
}


//craete a mold 
export const createMouleService = async ({ reference, nbPlateaux }: CreateMouleInput) => {
  return prisma.moule.create({  data: { reference, nbPlateaux, }, });
};

// Lit tous les moules
export function getMoulesService() {
  return prisma.moule.findMany();
}

//detaile mold
export const getMouleByIdService = async (id: number) => {
  return prisma.moule.findUnique({
    where: { id },
    include: {
      mesuresMoules: {
        include: {
          pieces: true
        }
      }
    }
  });
};



