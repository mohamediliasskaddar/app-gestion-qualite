-- CreateTable
CREATE TABLE "public"."Mesure" (
    "id" SERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "dateMesure" TIMESTAMP(3) NOT NULL,
    "taille" TEXT,

    CONSTRAINT "Mesure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Moule" (
    "id" SERIAL NOT NULL,
    "reference" TEXT NOT NULL,
    "nbPlateaux" INTEGER NOT NULL,

    CONSTRAINT "Moule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MesureMoule" (
    "id" SERIAL NOT NULL,
    "quota" DOUBLE PRECISION NOT NULL,
    "margeInf" DOUBLE PRECISION NOT NULL,
    "margeSup" DOUBLE PRECISION NOT NULL,
    "unite" TEXT NOT NULL,
    "mesureId" INTEGER NOT NULL,
    "mouleId" INTEGER NOT NULL,

    CONSTRAINT "MesureMoule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Piece" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "valeurPlateau1" DOUBLE PRECISION NOT NULL,
    "valeurPlateau2" DOUBLE PRECISION,
    "mesureMouleId" INTEGER NOT NULL,

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."MesureMoule" ADD CONSTRAINT "MesureMoule_mesureId_fkey" FOREIGN KEY ("mesureId") REFERENCES "public"."Mesure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MesureMoule" ADD CONSTRAINT "MesureMoule_mouleId_fkey" FOREIGN KEY ("mouleId") REFERENCES "public"."Moule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Piece" ADD CONSTRAINT "Piece_mesureMouleId_fkey" FOREIGN KEY ("mesureMouleId") REFERENCES "public"."MesureMoule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
