import { Comment, Post } from "@prisma/client";
import prismaClient from "../prisma";
import { commentCreateValidation } from "../validations/CommentValidation";

export default class CommentService {
    async create(comment: Comment) {
        const data = commentCreateValidation.validate(comment);
        if (data?.error) {
            throw new Error(`${data.error.name}: ${data.error.message}`);
        }
        return prismaClient.comment.create({ data: comment });
    }

    async findAll(filter?: any) {
        return prismaClient.comment.findMany({
            where: filter
        });
    }
}