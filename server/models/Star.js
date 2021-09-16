import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema({

  name: { type: String, required: true },
  description: { type: String },
  starId: { type: mongoose.Schema.Types.ObjectId },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
