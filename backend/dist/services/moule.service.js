import { prisma } from '../prisma.js';
export const createMouleService = async ({ reference, nbPlateaux }) => {
    return prisma.moule.create({
        data: {
            reference,
            nbPlateaux,
        },
    });
};
//# sourceMappingURL=moule.service.js.map