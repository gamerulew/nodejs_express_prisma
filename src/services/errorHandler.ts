import {NextFunction, Request, Response} from 'express';

export default function ErrorHandler(err: Error | any, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    if (err instanceof Error) {
        res.status(400).json({
            message: err.message,
        });
    } else {
        res.status(500).json({
            message: 'Internal server error',
        });
    }
}

export class SError extends Error {
    name: string;
    statusCode: number;
    isOperational: boolean;
    description: string;

    constructor(name: string, statusCode: number, isOperational: boolean, description: string) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.description = description;
        Error.captureStackTrace(this);
    }
}