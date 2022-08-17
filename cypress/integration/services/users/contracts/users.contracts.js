import Joi from '@hapi/joi';

const userSchema = Joi.object({
    id: Joi.number(),
    userName: Joi.string(),
    password: Joi.string(),
})

export default userSchema;

