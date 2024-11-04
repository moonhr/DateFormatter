const DateFormatter = require("./src/index");

const dateFormatter = new DateFormatter();
console.log("Formatted Date:", dateFormatter.format());
console.log("Year:", dateFormatter.getYear());
console.log("Month:", dateFormatter.getMonth());
console.log("Date:", dateFormatter.getDate());
console.log("Hours:", dateFormatter.getHours());
console.log("Minutes:", dateFormatter.getMinutes());
console.log("Seconds:", dateFormatter.getSeconds());
