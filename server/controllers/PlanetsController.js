import { planetsService } from '../services/PlanetsService.js'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getPlanet)
      .post('', this.createPlanet)
      .delete('/:planetId', this.removePlanet)
  }

  /**
   * Sends found planets to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getPlanet(req, res, next) {
    try {
      const planets = await planetsService.getPlanet()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a planet from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async createPlanet(req, res, next) {
    try {
      const planet = await planetsService.createPlanet(req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Deletes a planet using req params
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async removePlanet(req, res, next) {
    try {
      const planet = await planetsService.removePlanet(req.params.planetId)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
