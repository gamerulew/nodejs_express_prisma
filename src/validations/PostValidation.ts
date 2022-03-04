import Joi from "joi";

export const postCreateValidation = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    authorId: Joi.string().required()
})
