
import { galaxysService } from '../services/GalaxysService.js'
import BaseController from '../utils/BaseController'

export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxys')
    this.router
      .get('', this.getGalaxys)
      .get('/:galaxyId', this.getGalaxy)
      .post('', this.createGalaxy)
      .delete('/:galaxyId', this.removeGalaxy)
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxys(req, res, next) {
    try {
      const galaxys = await galaxysService.getGalaxys(req.query)
      res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxy(req, res, next) {
    try {
      const galaxys = await galaxysService.getGalaxy(req.params.galaxyId)
      res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async removeGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.removeGalaxy(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
