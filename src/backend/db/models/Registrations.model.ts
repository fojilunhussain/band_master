import mongoose, { Schema } from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
    registrationId: { type: String, required: true, unique: true },
    user: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }],
    event: [{
        type: Schema.Types.ObjectId, ref: 'Event'
    }]
});

const RegistrationsModel = mongoose.model("Review", RegistrationSchema);

export default RegistrationsModel;