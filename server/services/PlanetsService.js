import { dbContext } from '../db/DbContext.js'

class PlanetsService {
  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

  async getPlanet(query = {}) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }

  async removePlanet(planetId) {
    const removedPlanet = await dbContext.Planets.findByIdAndRemove(planetId)
    return removedPlanet
  }
}

export const planetsService = new PlanetsService()
