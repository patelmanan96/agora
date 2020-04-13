function EventCard(eventId, createdBy, img, title, tags, summary, desc, date, location) {
    this.id = eventId;
    this.createdBy = createdBy;
    this.image = img;
    this.title = title;
    this.tags = tags;
    this.summary = summary;
    this.description = desc;
    this.date = date;
    this.location = location;
}
export default EventCard;