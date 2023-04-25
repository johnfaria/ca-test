import TokenGenerator from '../../domain/service/TokenGenerator'

export default class CheckAuth {
    async execute (token: string): Promise<Output> {
        const tokenGenerator = new TokenGenerator('secret')
        const payload = tokenGenerator.verify(token)
        console.log(payload)
        return { email: payload.email.value }
    }
}

type Output = {
    email: string
}
