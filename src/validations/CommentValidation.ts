import Joi from "joi";

export const commentCreateValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    authorId: Joi.string().required(),
    postId: Joi.string().required()
})
