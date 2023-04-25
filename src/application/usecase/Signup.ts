import User from '../../domain/entity/User'
import UserRepository from '../repository/UserRepository'

export default class Signup {
    public static inject = ['userRepository'] as const
    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<void> {
        const user = await User.create(
            input.name,
            input.email,
            input.password,
            input.age
        )
        this.userRepository.save(user)
    }
}

type Input = {
    name: string
    email: string
    password: string
    age: number
}
