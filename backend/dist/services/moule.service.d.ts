interface CreateMouleInput {
    reference: string;
    nbPlateaux: number;
}
export declare const createMouleService: ({ reference, nbPlateaux }: CreateMouleInput) => Promise<{
    reference: string;
    id: number;
    nbPlateaux: number;
}>;
export {};
//# sourceMappingURL=moule.service.d.ts.map