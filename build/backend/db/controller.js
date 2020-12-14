"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const mongoose_1 = require("mongoose");
const Users_model_1 = require("./models/Users.model");
const Events_model_1 = require("./models/Events.model");
const Reviews_model_1 = require("./models/Reviews.model");
const Registrations_model_1 = require("./models/Registrations.model");
class DB {
    constructor() {
        const mongoDbUrl = `mongodb://127.0.0.1/band-master`;
        mongoose_1.connect(mongoDbUrl, { useNewUrlParser: true });
        this._db = mongoose_1.connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);
        this._models = {
            User: new Users_model_1.User().model,
            Event: new Events_model_1.Event().model,
            Review: new Reviews_model_1.Review().model,
            Registration: new Registrations_model_1.Registration().model
        };
    }
    static get Models() {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance._models;
    }
    connected() {
        console.log("Mongoose connected");
    }
    error(error) {
        console.log("Mongoose failed to connect", error);
    }
}
exports.DB = DB;
//# sourceMappingURL=controller.js.map