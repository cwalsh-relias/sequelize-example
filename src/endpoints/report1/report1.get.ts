import { Request, Response } from 'express'
import { Report1Dao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return Report1Dao
    .findAll()
    .then(report1 => res.status(200).send(report1))
    .catch(error => res.boom.badRequest(error))
}

export function one(req: Request, res: Response) {
  return Report1Dao
    .findOne(req.params.id)
    .then(report1 => res.status(200).send(report1))
    .catch(error => res.boom.badRequest(error))
}
