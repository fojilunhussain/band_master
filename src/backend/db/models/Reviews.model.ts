import { Schema, model, Document, Model } from 'mongoose';

declare interface IReview extends Document {
    reviewId: string;
    userId: Schema.Types.ObjectId;
    eventId: Schema.Types.ObjectId;
    review: string;
};

export interface ReviewsModel extends Model<IReview> {};

export class Review {
    private _model: Model<IReview>;

    constructor() {
        const ReviewSchema = new Schema({
            reviewId: { type: String, required: true, unique: true },
            user: [{
                type: Schema.Types.ObjectId, ref: 'User'
            }],
            event: [{
                type: Schema.Types.ObjectId, ref: 'Event'
            }],
            review: String
        });

        this._model = model<IReview>('Review', ReviewSchema);
    };

    public get model(): Model<IReview> {
        return this._model;
    };
};

export default Review;