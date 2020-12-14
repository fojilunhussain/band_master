"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
;
;
class User {
    constructor() {
        const UserSchema = new mongoose_1.Schema({
            userId: { type: String, required: true, unique: true }
        });
        this._model = mongoose_1.model('User', UserSchema);
    }
    ;
    get model() {
        return this._model;
    }
    ;
}
exports.User = User;
;
//# sourceMappingURL=Users.model.js.map