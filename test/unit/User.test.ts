import { expect, test } from 'vitest'
import User from '../../src/domain/entity/User'

const expectPw =
    'f1fa680348802c16e610e0afa109ef9fd2ea21001bf0449ea4372229cee93a13c3eb08a30068a92b82d376d195f5ed4bebfd9b51413a0ae23dbb38da9141a4b4'

test('should create a user', async () => {
    const user = await User.create(
        'John Doe',
        'johndoe@gmail.com',
        '12345678',
        30
    )
    expect(user.name.getValue()).toBe('John Doe')
    expect(user.email.getValue()).toBe('johndoe@gmail.com')
    expect(user.password.value).toBe(expectPw)
    expect(user.age).toBe(30)
})

test('should not create a user when name is invalid', () => {
    expect(() =>
        User.create('John', 'johndoe@gmail.com', '12345678', 30)
    ).rejects.toThrow(new Error('Invalid name'))
})

test('should not create a user when email is invalid', () => {
    expect(() =>
        User.create('John Doe', 'johndoe@gmail', '12345678', 30)
    ).rejects.toThrow(new Error('Invalid email'))
})

test('should not create a user when password is invalid', () => {
    expect(() =>
        User.create('John Doe', 'johndoe@gmail.com', '1234567', 30)
    ).rejects.toThrow(new Error('Invalid password'))
})

test('should not create a user when age is invalid', () => {
    expect(() =>
        User.create('John Doe', 'johndoe@gmail.com', '12345678', 17)
    ).rejects.toThrow(new Error('Invalid age'))
})
