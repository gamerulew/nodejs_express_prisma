import prismaClient from "../prisma";
import { hash } from "bcryptjs";
import { User } from "@prisma/client";
import IUser, { CUser } from "../interfaces/user/user";
export default class UserService {
    async findAll() {
        const users = await prismaClient.user.findMany({
            include: { authorities: true }
        });
        return users.map(user => {
            return new CUser(user);
        });
    }
    async findOne(id: string) {
        return prismaClient.user.findFirst({
            where: { id }
        });
    }
    async create(user: any) {
        const hashedPassword = await hash(user.password, 8);
        user.password = hashedPassword;
        return prismaClient.user.create({
            data: {
                name: user.name,
                login: user.login,
                email: user.email,
                password: user.password,
                authorities: {
                    create: user.authorities
                }
            },
            include: { authorities: true }
        });
    }
    async update(id: string, { name, email }: IUser) {
        if (!name || !email) {
            throw new Error("Name and email are required");
        }
        return prismaClient.user.update({
            where: { id },
            data: {
                name: name,
                email: email,
                // authorities: {
                //     // connectOrCreate: [
                //     //     {
                //     //         create: {
                //     //             authorityRole: 'USER',
                //     //         },
                //     //         where: {
                //     //             authorityRole: 'USER',
                //     //         },
                //     //     }
                //     // ]
                //     set:
                //         user.authorities.map(authority => {
                //             return {
                //                 userId_authorityRole: {
                //                     userId: id,
                //                     authorityRole: authority.authorityRole
                //                 }
                //             } as any;
                //         })
                // }
            },
            include: { authorities: true }
        });
    }
    async delete(id: string) {
        return prismaClient.user.delete({
            where: { id }
        });
    }
}