-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(7),

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarefas" (
    "id" SERIAL NOT NULL,
    "tarefa" VARCHAR(100) NOT NULL,
    "descricaotarefa" VARCHAR(300),
    "id_status" INTEGER,
    "criadoem" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "fk_tarefas_status" FOREIGN KEY ("id_status") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
