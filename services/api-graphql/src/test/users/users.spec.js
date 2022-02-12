import app from "../../app";
import supertest from "supertest";

const request = supertest(app);

it("fetch users", async () => {
  const user = await request
    .post("/graphql")
    .send({
      query: `mutation {
          createUser(user:{username: "test", password:"pepe"}) {
            username
          }
        }`,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/);
  const createdUser = user.body.data.createUser;
  expect(createdUser.username).toEqual("test");

  const responseUsers = await request
    .post("/graphql")
    .send({
      query: `{
          users  {
            username
          }
        }`,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/);
  const users = responseUsers.body.data.users;
  expect(users.length).toBe(1);
  expect(users[0].username).toBe(createdUser.username);
});
