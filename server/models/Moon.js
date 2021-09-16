import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MoonSchema = new Schema({

  name: { type: String, required: true },
  description: { type: String },
  moonId: { type: mongoose.Schema.Types.ObjectId },
  planetId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Planet' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
