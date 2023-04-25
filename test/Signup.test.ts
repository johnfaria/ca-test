import { test, expect } from 'vitest'
import UserRepositoryMemory from '../src/infra/repository/memory/UserRepositoryMemory'
import Signup from '../src/application/usecase/Signup'
import Login from '../src/application/usecase/Login'

test('Deve fazer o signup', async () => {
    // arrange
    const userRepository = new UserRepositoryMemory()
    const signup = new Signup(userRepository)
    const inputSignup = {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: '12345678',
        age: 30,
    }
    // act
    await signup.execute(inputSignup)
    const login = new Login(userRepository)
    const inputLogin = {
        email: 'johndoe@gmail.com',
        password: '12345678',
    }
    const output = await login.execute(inputLogin)
    // assert
    expect(output.name).toBe('John Doe')
    expect(output.token).toBe(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJ2YWx1ZSI6ImpvaG5kb2VAZ21haWwuY29tIn0sImlhdCI6MTY3MjUzMTIwMDAwMCwiZXhwaXJlc0luIjoxMDAwMDB9.YYVyyF97feSnHGINuvievX8tRl0iaDng6aMRcDE4-2E'
    )
})
