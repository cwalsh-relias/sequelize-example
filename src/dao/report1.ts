import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { Report1Instance } from './../sqlz/models/report1'

export function create(report1: Report1Instance): Promise<any> {
  return db.Report1
    .create({
      report1Id: report1.report1Id,
      report1Name: report1.report1Name
    })
}

export function findAll(): Promise<any> {
  return db.Report1
    .findAll()
}

export function findOne(id: number): Promise<any> {
  return db.Report1
    .findById(id)
}

