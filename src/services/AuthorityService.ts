import prismaClient from "../prisma";

export default class AuthorityService {
    async findAll() {
        return prismaClient.authority.findMany();
    }

    async create(authority: any) {
        return prismaClient.authority.create({ data: authority });
    }
}