"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = require("mongoose");
;
;
class Review {
    constructor() {
        const ReviewSchema = new mongoose_1.Schema({
            reviewId: { type: String, required: true, unique: true },
            user: [{
                    type: mongoose_1.Schema.Types.ObjectId, ref: 'User'
                }],
            event: [{
                    type: mongoose_1.Schema.Types.ObjectId, ref: 'Event'
                }],
            review: String
        });
        this._model = mongoose_1.model('Review', ReviewSchema);
    }
    ;
    get model() {
        return this._model;
    }
    ;
}
exports.Review = Review;
;
exports.default = Review;
//# sourceMappingURL=Reviews.model.js.map