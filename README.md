# Clean Arch 

1.29.16


2.18

```typescript
import { createInjector } from 'typed-inject'

import UserRepository from './application/repository/UserRepository'
import UserRepositoryMemory from './infra/repository/memory/UserRepositoryMemory'
import Signup from './application/usecase/Signup'
import Login from './application/usecase/Login'

const appInjector = createInjector().provideClass(
    'userRepository',
    UserRepositoryMemory
)
const signUp = appInjector.injectClass(Signup)
const login = appInjector.injectClass(Login)

const main = async () => {
    await signUp.execute({
        email: 'johnwbf@hotmail.com',
        age: 28,
        name: 'John Faria',
        password: '12345678',
    })
    const value = await login.execute({
        email: 'johnwbf@hotmail.com',
        password: '12345678',
    })

    console.log(value)
}

main()
```