const { Mongoose } = require("mongoose");
const supertest = require("supertest");
const User = require("../db/models/Users.model");

beforeAll(async () => {
    const url = `mongodb://127.0.0.1/band-master`;
    await Mongoose.connect(url, { useNewUrlParser: true });
});

describe('Sample test', () => {
    it('should test that 2 + 2 != 5', () => {
        expect(2 + 2).not.toBe(5);
    });
});

describe("POST /users", () => {
    describe("Creating a user", () => {
        describe("Valid creation", () => {
            let res: any, numOfUsersBefore: number, numOfUsersAfter: number;

            const userId = Math.random().toString().substr(2, 8).toString;

            beforeAll(async done => {
                const usersBefore = await User.Find({});
                numOfUsersBefore = usersBefore.length;

                res = await supertest()
                    .post("/users")
                    .send(userId);

                const usersAfter = await User.find({});
                numOfUsersAfter= usersAfter.length;

                done();
            });

            test("Only one extra user exists in the database", () => {
                expect(numOfUsersAfter).toBe(numOfUsersBefore + 1);
            });
        });
    });
});