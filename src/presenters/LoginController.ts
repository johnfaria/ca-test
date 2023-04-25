import Login from '../application/usecase/Login'
import UserRepositoryMemory from '../infra/repository/memory/UserRepositoryMemory'

type Request = { body?: any; params?: any; query?: any; headers?: any }

export default class LoginController {
    static async handle (request: Request) {
        const userRepository = new UserRepositoryMemory()

        const login = new Login(userRepository)
        const response = await login.execute(request.body)

        return response
    }
}
