import { expect, test } from 'vitest'
import Name from '../../src/domain/entity/Name'

test('Deve criar um nome válido', () => {
    const name = new Name('John Doe')
    expect(name.getValue()).toBe('John Doe')
})

test('Não deve criar quando tem um nome invalido', () => {
    expect(() => {
        return new Name('John')
    }).toThrow(new Error('Invalid name'))
})
