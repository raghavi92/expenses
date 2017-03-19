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

  oneMonthBack() {
    this.fromDate = this.fromDate.subtract(1, "month");
    this.toDate = this.toDate.subtract(1, "month");
    return this;
  }

  oneWeekBack() {
    this.fromDate = this.fromDate.subtract(1, "week");
    this.toDate = this.toDate.subtract(1, "week");
    return this;
  }

  oneDayBack() {
    this.fromDate = this.fromDate.subtract(1, "day");
    this.toDate = this.toDate.subtract(1, "day");
    return this;
  }

  oneMonthForward() {
    this.fromDate = this.fromDate.add(1, "month");
    this.toDate = this.toDate.add(1, "month");
    return this;
  }

  oneWeekForward() {
    this.fromDate = this.fromDate.add(1, "week");
    this.toDate = this.toDate.add(1, "week");
    return this;
  }

  oneDayForward() {
    this.fromDate = this.fromDate.add(1, "day");
    this.toDate = this.toDate.add(1, "day");
    return this;
  }

  getFromDateAsJSDate() {
    return this.fromDate.toDate();
  }

  getToDateAsJSDate() {
    return this.toDate.toDate();
  }
}
export default CustomDate;
