import TokenGenerator from '../../domain/service/TokenGenerator'
import UserRepository from '../repository/UserRepository'

type Input = {
    email: string
    password: string
}

type Output = {
    name: string
    token: string
}

export default class Login {
    public static inject = ['userRepository'] as const
    constructor (private userRepository: UserRepository) {}

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email)
        if (!user) throw new Error('Authentication Failed')
        const isValidPassword = await user.validatePassword(input.password)
        if (!isValidPassword) {
            throw new Error('Authentication Failed')
        }
        const tokenGenerator = new TokenGenerator('secret')
        const token = tokenGenerator.generate(
            user,
            100000,
            new Date('2023-01-01')
        )
        const output: Output = {
            name: user.name.getValue(),
            token: token,
        }
        return output
    }
}
