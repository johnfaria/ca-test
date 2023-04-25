import User from '../entity/User'
import { AbstractSpecification } from './Specification'

export default class UserEmailSpecification extends AbstractSpecification<User> {
    isSatisfiedBy (t: User): boolean {
        return this.validateEmail(t.email)
    }

    private validateEmail (email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
}
