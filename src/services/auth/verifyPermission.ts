import { Role } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { CAuthority } from "../../interfaces/authority";
import { CUser } from "../../interfaces/user/user";
import prismaClient from "../../prisma";

export default function verifyPermission(authorities: Role[]) {
    return async function (req: Request | any, res: Response, next: NextFunction) {
        const { userId } = req;
        if (!userId) {
            throw new Error("Unauthenticated");
        }

        let user = await prismaClient.user.findFirst({
            where: { id: userId },
            include: { authorities: true }
        });
        if (!user) {
            throw new Error("User not found");
        }
        const cUser = new CUser(user);
        const hasPermission = (cUser.authorities as CAuthority[]).some(authority => {
            if (authorities.includes(authority.authorityRole)) {
                return true;
            }
        })
        if (!hasPermission) {
            throw new Error("User not authorized");
        }
        next();
    }
}