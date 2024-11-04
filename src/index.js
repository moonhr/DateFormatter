// Define a DateFormatter class to handle and format current date and time details
class DateFormatter {
  constructor() {
    this.date = new Date(); // Initialize with the current date and time
  }

  // Method to get the full year (e.g., 2024)
  year() {
    return this.date.getFullYear();
  }

  // Method to get the month (1-12).
  // getMonth() returns 0 for January, so we add 1 for user-friendly format
  month() {
    return this.date.getMonth() + 1;
  }

  // Method to get the day of the month (1-31)
  date() {
    return this.date.getDate();
  }

  // Method to get the hours (0-23)
  hours() {
    return this.date.getHours();
  }

  // Method to get the minutes (0-59)
  minutes() {
    return this.date.getMinutes();
  }

  // Method to get the seconds (0-59)
  seconds() {
    return this.date.getSeconds();
  }

  // Method to get the formatted date as a string in "YYYY-MM-DD HH:mm:ss" format
  format() {
    return `${this.getYear()}-${this.getMonth()}-${this.getDate()} ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
  }
}

// Export the DateFormatter class as a module to make it usable in other files
module.exports = DateFormatter;
