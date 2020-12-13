import mongoose, { Schema } from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    reviewId: { type: String, required: true, unique: true },
    user: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    event: [{
        type: Schema.Types.ObjectId, ref: 'Event'
    }],
    review: String
});

const ReviewsModel = mongoose.model("Review", ReviewSchema);

export default ReviewsModel;