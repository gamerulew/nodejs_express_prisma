import { Request, Response } from "express";
import { AuthService } from "../services/auth/AuthService";

export default class AuthController {
    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body;
        const authService = new AuthService();
        const token = await authService.authenticate({ email, password });
        res.json({ token });
    }
}