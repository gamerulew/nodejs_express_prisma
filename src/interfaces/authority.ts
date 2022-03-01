import { Role } from "@prisma/client"

export class CAuthority {
    userId: string
    authorityRole: Role
    constructor(authority: any) {
        this.userId = authority.userId
        this.authorityRole = authority.authorityRole
    }
}