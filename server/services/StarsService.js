import { dbContext } from '../db/DbContext.js'

class StarsService {
  async createStar(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }

  async getStar(query = {}) {
    const stars = await dbContext.Stars.find(query)
    return stars
  }

  async removeStar(starId) {
    const removedStar = await dbContext.Stars.findByIdAndRemove(starId)
    return removedStar
  }
}

export const starsService = new StarsService()
