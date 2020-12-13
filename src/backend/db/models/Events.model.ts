import { Schema, model, Document, Model } from 'mongoose';

declare interface IEvent extends Document {
    eventId: string;
    date: Date;
    city: Enumerator<listOfCapitals>;
};

enum listOfCapitals {
    'Kabul',
    'Tirana',
    'Algiers',
    'Andorra la Vella',
    'Luanda',
    'Saint John\'s',
    'Buenos Aires',
    'Yerevan',
    'Canberra',
    'Vienna',
    'Baku'
};

export interface EventsModel extends Model<IEvent> {};

export class Event {
    private _model: Model<IEvent>;

    constructor() {
        const EventSchema = new Schema({
            eventId: { type: String, required: true, unique: true },
            date: Date,
            city: { enum: listOfCapitals }
        });

        this._model = model<IEvent>('Event', EventSchema);
    };

    public get model(): Model<IEvent> {
        return this._model;
    };
};

export default EventsModel;