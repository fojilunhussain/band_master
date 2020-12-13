import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true }
});

const UsersModel = mongoose.model("User", UserSchema);

export default UsersModel;