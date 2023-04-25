import User from '../entity/User'
import { AbstractSpecification } from './Specification'

export default class UserAgeSpecification extends AbstractSpecification<User> {
    isSatisfiedBy (t: User): boolean {
        return t.age >= 18
    }
}
