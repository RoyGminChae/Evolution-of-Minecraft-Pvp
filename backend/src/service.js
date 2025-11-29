import prisma from '../prisma/prisma.js';

// returns an array with the following conditions
export async function getAllWith(table, conditionObj) {
    return prisma[table].findMany({where: conditionObj});
}