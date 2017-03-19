import moment from 'moment';
const formatDate = (date) => {
  return date.format("DD/MM/YYYY");
}
class CustomDate {
  constructor(duration) {
    switch (duration) {
      case "daily":
        this.fromDate = new moment();
        this.toDate = new moment();
        break;
      case "weekly":
        this.fromDate = new moment().subtract(1, "week");
        this.toDate = new moment();
        break;
      case "monthly":
        this.fromDate = new moment().subtract(1, "month");
        this.toDate = new moment();
        break;
    }
  }

  getFriendlyDate() {
    return `${formatDate(this.fromDate)} - ${formatDate(this.toDate)}`;
  }

  oneWeekBack() {
    this.fromDate = this.fromDate.subtract(1, "week");
    this.toDate = this.toDate.subtract(1, "week");
  }

  oneDayBack() {
    this.fromDate = this.fromDate.subtract(1, "day");
    this.toDate = this.toDate.subtract(1, "day");
  }

  getFromDateAsJSDate() {
    return this.fromDate.toDate();
  }

  getToDateAsJSDate() {
    return this.toDate.toDate();
  }
}
export default CustomDate;
