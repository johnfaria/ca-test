import { eventHandler } from 'h3'
import HTTPServerH3 from './infra/http/http.h3'
import LoginController from './presenters/LoginController'
import SignUpController from './presenters/SignUpController'

const http = new HTTPServerH3()

http.addRoute('/login', 'POST', LoginController.handle)
http.addRoute('/signup', 'POST', SignUpController.handle)

http.listen(4000)
