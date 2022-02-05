import userMutations from "./users.mutations"


it('creates a user with the given username', async () => {
    const user = {username: 'test'}
    const createdUser = await userMutations.createUser(null, {user})
    expect(createdUser.username).toEqual(user.username)  
})

it('updates a user with the given username', async () => {
    const user = {username: 'test'}
    const createdUser = await userMutations.createUser(null, {user})
    const userModified = {id: createdUser.id, username: 'testModified'}
    const updatedUser = await userMutations.updateUser(null, {id :createdUser.id, user:userModified  })
    expect(updatedUser.username).toEqual(userModified.username)  
})