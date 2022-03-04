import { Comment } from "@prisma/client";
import { Request, Response } from "express";
import CommentService from "../services/CommentService";

export default class CommentController {
    async create(req: Request | any, res: Response) {
        const commentService = new CommentService();
        const data: Comment = req.body;
        data.authorId = req.userId;
        const comment = await commentService.create(data);
        res.json(comment);
    }
    async findAll(req: Request | any, res: Response) {
        const commentService = new CommentService();
        const filter = req.query;
        const comments = await commentService.findAll(filter);
        res.json(comments);
    }
}