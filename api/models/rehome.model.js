import mongoose from 'mongoose';

const rehomeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 0, 
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'],
      required: true,
    },
    size: {
      type: String,
      enum: ['Small', 'Medium', 'Large', 'Extra Large', 'Unknown'],
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    vaccination: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Rehome = mongoose.model('Rehome', rehomeSchema);

export default Rehome;