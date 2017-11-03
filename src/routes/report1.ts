import { Express } from 'express'
import { Report1Controller } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/report1', Report1Controller.Report1Get.list)
  app.get('/api/report1/:id', Report1Controller.Report1Get.one)
  app.post('/api/report1', Report1Controller.Report1Post.create)

}
