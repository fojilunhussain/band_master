import mongoose from 'mongoose';

const listOfCapitals = [
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
];

const EventSchema = new mongoose.Schema({
    eventId: { type: String, required: true, unique: true },
    date: Date,
    city: { enum: listOfCapitals }
});

const EventsModel = mongoose.model("Event", EventSchema);

export default EventsModel;