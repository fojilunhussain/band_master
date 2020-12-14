"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
const mongoose_1 = require("mongoose");
;
;
class Registration {
    constructor() {
        const RegistrationSchema = new mongoose_1.Schema({
            registrationId: { type: String, required: true, unique: true },
            user: [{
                    type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
                }],
            event: [{
                    type: mongoose_1.Schema.Types.ObjectId, ref: 'Event'
                }]
        });
        this._model = mongoose_1.model('Registration', RegistrationSchema);
    }
    ;
    get model() {
        return this._model;
    }
}
exports.Registration = Registration;
;
//# sourceMappingURL=Registrations.model.js.map