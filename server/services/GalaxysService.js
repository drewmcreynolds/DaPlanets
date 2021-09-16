import { dbContext } from '../db/DbContext.js'
import { BadRequest } from '../utils/Errors.js'

class GalaxysService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxys.create(galaxyData)
    return galaxy
  }

  async getGalaxy(galaxyId) {
    const galaxy = await dbContext.Galaxys.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest('invalid gal Id')
    }
    return galaxy
  }

  async getGalaxys(query = {}) {
    const galaxys = await dbContext.Galaxys.find(query)
    return galaxys
  }

  async removeGalaxy(galaxyId) {
    const removedGalaxy = await dbContext.Galaxys.findByIdAndRemove(galaxyId)
    return removedGalaxy
  }
}

export const galaxysService = new GalaxysService()
