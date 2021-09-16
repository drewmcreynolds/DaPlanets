import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({

  name: { type: String, required: true },
  description: { type: String },
  planetId: { type: mongoose.Schema.Types.ObjectId },
  starId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Star' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
