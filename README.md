# TodayDateFormatter

`TodayDateFormatter` is a simple JavaScript library designed to fetch and format the current date and time. This library provides an easy way to extract components of the current date, such as year, month, day, hours, minutes, and seconds, and also allows you to format it into a readable string.

## Installation

To install `todaydateformatter`, use the following npm command:

```bash
npm install todaydateformatter
```

## Usage

### Importing the DateFormatter Class

To use the `DateFormatter` class, you need to import it into your JavaScript file:

```javascript
const DateFormatter = require("todaydateformatter");
```

### Creating an Instance

Create an instance of the `DateFormatter` class:

```javascript
const dateFormatter = new DateFormatter();
```

### Fetching Date Components

You can fetch various components of the current date and time:

```javascript
const year = dateFormatter.year(); // e.g., 2024
const month = dateFormatter.month(); // e.g., 11 (November)
const day = dateFormatter.date(); // e.g., 4
const hours = dateFormatter.hours(); // e.g., 14
const minutes = dateFormatter.minutes(); // e.g., 30
const seconds = dateFormatter.seconds(); // e.g., 15
```

### Formatting the Date

The library also provides a method to format the date as a string:

```javascript
const formattedDate = dateFormatter.format(); // e.g., "2024-11-04 14:30:15"
console.log(formattedDate);
```

### Variations of Date Formats

You can create your own formatted strings based on the components available:

1. **Using Month/Day Format:**

```javascript
const mdFormat = `${dateFormatter.month()}/${dateFormatter.date()}`; // e.g., "11/4"
console.log(mdFormat);
```

2. **Using Year.Month.Day Format:**

```javascript
const ymdFormat = `${dateFormatter.year()}.${dateFormatter.month()}.${dateFormatter.date()}`; // e.g., "2024.11.4"
console.log(ymdFormat);
```

3. **Using a Full Date with Time:**

```javascript
const fullFormat = `${dateFormatter.year()}-${dateFormatter.month()}-${dateFormatter.date()} ${dateFormatter.hours()}:${dateFormatter.minutes()}:${dateFormatter.seconds()}`; // e.g., "2024-11-04 14:30:15"
console.log(fullFormat);
```

### Conclusion

The `TodayDateFormatter` library is a straightforward way to manage and format date and time in your JavaScript projects. Whether you need to display the current date or log it for processing, this library provides the necessary tools for effective date handling.
