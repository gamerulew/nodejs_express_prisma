import {Post} from '@prisma/client';
import prismaClient from '../prisma';
import {postCreateValidation} from '../validations/PostValidation';

export default class PostService {
    async create(post: Post) {
        try {

        } catch (error) {

        }
        const data = postCreateValidation.validate(post);
        if (data?.error) {
            throw new Error(`${data.error.name}: ${data.error.message}`);
        }
        return prismaClient.post.create({data: post});
    }

    async findAll() {
        return prismaClient.post.findMany();
    }
}