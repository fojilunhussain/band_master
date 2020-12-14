"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const mongoose_1 = require("mongoose");
;
var listOfCapitals;
(function (listOfCapitals) {
    listOfCapitals[listOfCapitals["Kabul"] = 0] = "Kabul";
    listOfCapitals[listOfCapitals["Tirana"] = 1] = "Tirana";
    listOfCapitals[listOfCapitals["Algiers"] = 2] = "Algiers";
    listOfCapitals[listOfCapitals["Andorra la Vella"] = 3] = "Andorra la Vella";
    listOfCapitals[listOfCapitals["Luanda"] = 4] = "Luanda";
    listOfCapitals[listOfCapitals["Saint John's"] = 5] = "Saint John's";
    listOfCapitals[listOfCapitals["Buenos Aires"] = 6] = "Buenos Aires";
    listOfCapitals[listOfCapitals["Yerevan"] = 7] = "Yerevan";
    listOfCapitals[listOfCapitals["Canberra"] = 8] = "Canberra";
    listOfCapitals[listOfCapitals["Vienna"] = 9] = "Vienna";
    listOfCapitals[listOfCapitals["Baku"] = 10] = "Baku";
})(listOfCapitals || (listOfCapitals = {}));
;
;
class Event {
    constructor() {
        const EventSchema = new mongoose_1.Schema({
            eventId: { type: String, required: true, unique: true },
            date: Date,
            city: { enum: listOfCapitals }
        });
        this._model = mongoose_1.model('Event', EventSchema);
    }
    ;
    get model() {
        return this._model;
    }
    ;
}
exports.Event = Event;
;
//# sourceMappingURL=Events.model.js.map