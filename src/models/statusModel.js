import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAllStatus = async () => {
    return await prisma.status.findMany({
        orderBy: { id : "asc" }
    });
}