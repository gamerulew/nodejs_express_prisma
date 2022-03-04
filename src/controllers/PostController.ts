import { Post } from "@prisma/client";
import { Request, Response } from "express";
import PostService from "../services/postService";

export default class PostController {
    async create(req: Request | any, res: Response) {
        const postService = new PostService();
        const data: Post = req.body;
        data.authorId = req.userId;
        const post = await postService.create(data);
        res.json(post);
    }

    async findAll(req: Request | any, res: Response) {
        const postService = new PostService();
        const posts = await postService.findAll();
        res.json(posts);
    }
}