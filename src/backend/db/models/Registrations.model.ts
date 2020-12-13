import { Schema, model, Document, Model } from 'mongoose';

declare interface IRegistration extends Document {
    registrationId: string;
    userId: Schema.Types.ObjectId;
    eventId: Schema.Types.ObjectId;
};

export interface RegistrationsModel extends Model<IRegistration> { };

export class Registration {
    private _model: Model<IRegistration>;

    constructor() {
        const RegistrationSchema = new Schema({
            registrationId: { type: String, required: true, unique: true },
            user: [{
                type: Schema.Types.ObjectId, ref: 'User'
            }],
            event: [{
                type: Schema.Types.ObjectId, ref: 'Event'
            }]
        });

        this._model = model<IRegistration>('Registration', RegistrationSchema);
    };

    public get model(): Model<IRegistration> {
        return this._model;
    }
};

export default RegistrationsModel;