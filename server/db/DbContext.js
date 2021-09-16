import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy.js'
import { PlanetSchema } from '../models/Planet.js'
import { StarSchema } from '../models/Star.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Planets = mongoose.model('Planet', PlanetSchema)
  Stars = mongoose.model('Star', StarSchema)
  Galaxys = mongoose.model('Galaxy', GalaxySchema)
  Values = mongoose.model('Value', ValueSchema)
}

export const dbContext = new DbContext()
