import { Request, Response } from "express";
import prismaClient from "../prisma";
import AuthorityService from "../services/AuthorityService";

export default class AuthorityController {
    async findAll(req: Request, res: Response) {
        const authorityService = new AuthorityService();
        const authorities = await authorityService.findAll();
        res.json(authorities);
    }

    async create(req: Request, res: Response) {
        const authorityService = new AuthorityService();
        const authority = await authorityService.create(req.body);
        res.json(authority);
    }
}