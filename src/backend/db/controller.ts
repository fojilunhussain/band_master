import { connect, connection, Connection } from 'mongoose';
import { User, UsersModel } from './models/Users.model'
import { Event, EventsModel } from './models/Events.model';
import { Review, ReviewsModel } from './models/Reviews.model';
import { Registration, RegistrationsModel } from './models/Registrations.model';

declare interface IModels {
    User: UsersModel;
    Event: EventsModel;
    Review: ReviewsModel;
    Registration: RegistrationsModel;
}

export class DB {
    private static instance: DB;

    private _db: Connection;
    private _models: IModels;

    private constructor() {
        const mongoDbUrl = `mongodb://127.0.0.1/band-master`;

        connect(mongoDbUrl, { useNewUrlParser: true });
        this._db = connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);

        this._models = {
            User: new User().model,
            Event: new Event().model,
            Review: new Review().model,
            Registration: new Registration().model
        }
    }

    public static get Models() {
        if (!DB.instance) {
            DB.instance = new DB();
        }

        return DB.instance._models;
    }

    private connected() {
        console.log("Mongoose connected");
    }

    private error(error) {
        console.log("Mongoose failed to connect", error);
    }
}