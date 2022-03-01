import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
export default function ensureAuth(req: Request | any, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
        throw new Error("Unauthenticated");
    }
    const [bearer, key] = token.split(" ");
    if ((!bearer || bearer !== "Bearer") || !key) {
        throw new Error("Invalid token");
    }
    verify(key, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
        if (err) {
            throw new Error("Invalid token");
        }
        req['userId'] = decoded['userId'] as string;
        next();
    });
}