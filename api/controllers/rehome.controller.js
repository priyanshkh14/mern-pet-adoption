import Rehome from '../models/rehome.model.js';

export const createRehome = async (req, res, next) => {
  try {
    const rehome = await Rehome.create(req.body);
    return res.status(201).json(rehome);
  } catch (error) {
    next(error);
  }
};