import userQueries from "./users.queries"
import userMutations from "./users.mutations"

describe('userQueries', () => {


it('retrieves a list of users', async () => {
    const users = [{username: 'test1', password: 'password'},{username: 'test2', password: 'password'}]
    await Promise.all(users.map(user=>userMutations.createUser(null, {user})))
    const foundUsers = await userQueries.users()
    expect(foundUsers.length).toEqual(2)
    users.map(user=>{
        const isUserInDB = foundUsers.some(u=> u.username === user.username)
        expect(isUserInDB).toEqual(true)
    }) 
 
})

it('retrieves an user', async () => {
   
    const user = {username: 'test1', password: 'password'}
    const createdUser = await userMutations.createUser(null, {user})
    const foundUser = await userQueries.user(null, {id: createdUser.id })
    expect(createdUser.username).toEqual(foundUser.username)  
})
})