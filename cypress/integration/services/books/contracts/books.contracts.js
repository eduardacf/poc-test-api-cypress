import Joi from '@hapi/joi';

const bookSchema = Joi.object({
    id: Joi.number(),
    title: Joi.string(),
    description: Joi.string(),
    pageCount: Joi.number(),
    excerpt: Joi.string(),
    publishDate: Joi.date()
})

export default bookSchema;

