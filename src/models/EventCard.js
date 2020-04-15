class EventCard {
    constructor(eventId, createdBy, img, title, tags, summary, desc, date, location) {
        this._eventId = eventId;
        this._createdBy = createdBy;
        this._img = img;
        this._title = title;
        this._tags = tags;
        this._summary = summary;
        this._desc = desc;
        this._date = date;
        this._location = location;
    }

    get eventId() {
        return this._eventId;
    }

    set eventId(value) {
        this._eventId = value;
    }

    get createdBy() {
        return this._createdBy;
    }

    set createdBy(value) {
        this._createdBy = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get tags() {
        return this._tags;
    }

    set tags(value) {
        this._tags = value;
    }

    get summary() {
        return this._summary;
    }

    set summary(value) {
        this._summary = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }
}

export default EventCard;