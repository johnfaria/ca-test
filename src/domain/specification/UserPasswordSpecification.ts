import User from '../entity/User'
import { AbstractSpecification } from './Specification'

export default class UserPasswordSpecification extends AbstractSpecification<User> {
    isSatisfiedBy (t: User): boolean {
        return t.password.length >= 8
    }
}
