export default class Email {
    private value: string

    constructor (email: string) {
        if (!this.validateEmail(email)) {
            throw new Error('Invalid email')
        }
        this.value = email
    }

    public getValue (): string {
        return this.value
    }

    private validateEmail (email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
}
