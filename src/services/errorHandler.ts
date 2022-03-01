import { NextFunction, Request, Response } from "express"

export default function ErrorHandler(err: Error | any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof Error) {
        res.status(400).json({
            message: err.message,
        })
    } else {
        res.status(500).json({
            message: "Internal server error",
        })
    }
}