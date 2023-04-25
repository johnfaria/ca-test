import { expect, test } from 'vitest'
import CheckAuth from '../../src/application/usecase/CheckAuth'

test('Deve verificar se está autenticado', async () => {
    const checkAuth = new CheckAuth()
    const input =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJ2YWx1ZSI6ImpvaG5kb2VAZ21haWwuY29tIn0sImlhdCI6MTY3MjUzMTIwMDAwMCwiZXhwaXJlc0luIjoxMDAwMDB9.YYVyyF97feSnHGINuvievX8tRl0iaDng6aMRcDE4-2E'
    const output = await checkAuth.execute(input)
    expect(output.email).toBe('johndoe@gmail.com')
})
