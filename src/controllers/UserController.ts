import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
    async findAll(req: Request, res: Response) {
        const userService = new UserService();
        const users = await userService.findAll();
        res.json(users);
    }
    async create(req: Request, res: Response) {
        const userService = new UserService();
        const user = await userService.create(req.body);
        res.json(user);
    }
    async findOne(req: Request, res: Response) {
        const userService = new UserService();
        const user = await userService.findOne(req.params.id);
        res.json(user);
    }
    async update(req: Request, res: Response) {
        const userService = new UserService();
        const user = await userService.update(req.params.id, req.body);
        res.json(user);
    }
}