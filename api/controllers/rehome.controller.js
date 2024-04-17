import Rehome from '../models/rehome.model.js';
import { errorHandler } from '../utils/error.js';

export const createRehome = async (req, res, next) => {
  try {
    const rehome = await Rehome.create(req.body);
    return res.status(201).json(rehome);
  } catch (error) {
    next(error);
  }
};

export const deleteRehome = async (req, res, next) => {
  const rehome = await Rehome.findById(req.params.id);

  if (!rehome) {
    return next(errorHandler(404, 'Rehome Animal not found!'));
  }

  if (req.user.id !== rehome.userRef) {
    return next(errorHandler(401, 'You can only delete your own rehome!'));
  }

  try {
    await Rehome.findByIdAndDelete(req.params.id);
    res.status(200).json('Rehome has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const updateRehome = async (req, res, next) => {
  const rehome = await Rehome.findById(req.params.id);
  if (!rehome) {
    return next(errorHandler(404, 'Rehome not found!'));
  }
  if (req.user.id !== rehome.userRef) {
    return next(errorHandler(401, 'You can only update your own rehome animal!'));
  }

  try {
    const updatedRehome = await Rehome.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedRehome);
  } catch (error) {
    next(error);
  }
};

export const getRehome = async (req, res, next) => {
  try {
    const rehome = await Rehome.findById(req.params.id);
    if (!rehome) {
      return next(errorHandler(404, 'Rehome not found!'));
    }
    res.status(200).json(rehome);
  } catch (error) {
    next(error);
  }
  
  }

export const getRehomes = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
  
    const searchTerm = req.query.searchTerm || '';

    const rehomes = await Rehome.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { breed: { $regex: searchTerm, $options: 'i' } },
        { species: { $regex: searchTerm, $options: 'i' } }
      ]
    })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(rehomes);
  } catch (error) {
    next(error);
  }
};