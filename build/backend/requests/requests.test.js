"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Mongoose } = require("mongoose");
const supertest = require("supertest");
const User = require("../db/models/Users.model");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const url = `mongodb://127.0.0.1/band-master`;
    yield Mongoose.connect(url, { useNewUrlParser: true });
}));
describe('Sample test', () => {
    it('should test that 2 + 2 != 5', () => {
        expect(2 + 2).not.toBe(5);
    });
});
describe("POST /users", () => {
    describe("Creating a user", () => {
        describe("Valid creation", () => {
            let res, numOfUsersBefore, numOfUsersAfter;
            const userId = Math.random().toString().substr(2, 8).toString;
            beforeAll((done) => __awaiter(void 0, void 0, void 0, function* () {
                const usersBefore = yield User.Find({});
                numOfUsersBefore = usersBefore.length;
                res = yield supertest()
                    .post("/users")
                    .send(userId);
                const usersAfter = yield User.find({});
                numOfUsersAfter = usersAfter.length;
                done();
            }));
            test("Only one extra user exists in the database", () => {
                expect(numOfUsersAfter).toBe(numOfUsersBefore + 1);
            });
        });
    });
});
//# sourceMappingURL=requests.test.js.map