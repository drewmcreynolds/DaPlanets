import { starsService } from '../services/StarsService.js'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStar)
      .post('', this.createStar)
      .delete('/:starId', this.removeStar)
  }

  async getStar(req, res, next) {
    try {
      const stars = await starsService.getStar()
      return res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async removeStar(req, res, next) {
    try {
      const star = await starsService.removeStar(req.params.starId)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
