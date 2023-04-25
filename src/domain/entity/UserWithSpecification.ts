import UserAgeSpecification from '../specification/UserAgeSpecification'
import UserEmailSpecification from '../specification/UserEmailSpecification'
import UserNameSpecification from '../specification/UserNameSpecification'
import UserPasswordSpecification from '../specification/UserPasswordSpecification'

export default class UserWithSpecification {
    constructor (
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly age: number
    ) {
        const nameSpecification = new UserNameSpecification()
        const emailSpecification = new UserEmailSpecification()
        const ageSpecification = new UserAgeSpecification()
        const passwordSpecification = new UserPasswordSpecification()
        if (
            !nameSpecification
                .and(emailSpecification)
                .and(passwordSpecification)
                .and(ageSpecification)
            // .isSatisfiedBy(this)
        ) {
            throw new Error('Invalid parameter')
        }
    }

    private validateEmail (email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
}
