import UserRepositoryMemory from '../infra/repository/memory/UserRepositoryMemory'
import Signup from '../application/usecase/Signup'

type Request = { body?: any; params?: any; query?: any; headers?: any }

export default class SignUpController {
    static async handle (request: Request) {
        const userRepository = new UserRepositoryMemory()
        const signup = new Signup(userRepository)
        await signup.execute(request.body)
        return { status: 200 }
    }
}
