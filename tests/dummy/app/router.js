import Ember from 'ember'
import config from './config/environment'

const { Router } = Ember

const MyRouter = Router.extend({
  location: config.locationType
})

MyRouter.map(function () {
})

export default MyRouter
