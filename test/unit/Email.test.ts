import { expect, test } from 'vitest'
import Email from '../../src/domain/entity/Email'

test('Deve criar um email válido', () => {
    const email = new Email('johndoe@gmail.com')
    expect(email.getValue()).toBe('johndoe@gmail.com')
})

test('Deve criar um email válido', () => {
    expect(() => {
        return new Email('johndoe@email')
    }).toThrow(new Error('Invalid email'))
})
