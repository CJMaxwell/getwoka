import Joi from '@hapi/joi';

const validateData = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number(),
    firstName: Joi.string().alphanum().min(3).max(30)
      .required(),
    lastName: Joi.string().alphanum().min(3).max(30)
      .required(),
    phoneNumber: Joi.number().required(),
    password: Joi.string().min(4).required(),
    dateOfBirth: Joi.date().required(),
    avatar: Joi.string(),
    skill: Joi.string().max(50).required(),
    skillDescription: Joi.string().max(250).required(),
    city: Joi.string().max(80),
    state: Joi.string().max(80),
    country: Joi.string().max(80),
    admin: Joi.boolean(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error.details[0]);
  }
  return next();
};

export default validateData;
