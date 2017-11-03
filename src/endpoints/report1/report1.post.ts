import { Request, Response } from 'express'
import { Report1Dao } from '../../dao/_index'

export function create(req: Request, res: Response) {
  return Report1Dao.create(req.body)
    .then(report1 => res.status(201).send(report1))
    .catch(error => res.boom.badRequest(error))
}
