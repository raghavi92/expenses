import moment from 'moment';
const formatDate = (date) => {
  return date.format("DD/MM/YYYY");
}
class Date {
  constructor() {
    this.fromDate = new moment();
    this.toDate = new moment();
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
}
