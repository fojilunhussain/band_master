import { Schema, model, Document, Model } from 'mongoose';

declare interface IUser extends Document {
    userId: string;
};

export interface UsersModel extends Model<IUser> {};

export class User {
    private _model: Model<IUser>;

    constructor() {
        const UserSchema = new Schema({
            userId: { type: String, required: true, unique: true }
        });

        this._model = model<IUser>('User', UserSchema);
    };

    public get model(): Model<IUser> {
        return this._model;
    };
};

export default UsersModel;