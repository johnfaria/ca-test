import User from '../entity/User'
import { AbstractSpecification } from './Specification'

export default class UserNameSpecification extends AbstractSpecification<User> {
    isSatisfiedBy (t: User): boolean {
        return t.name.split(' ').length >= 2
    }
}
