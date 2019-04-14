export default new Date();

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const days = [
  'Su',
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa',
];

// returns today's date as a number
export function getToday() {
  return new Date().getDate();
}

// returns current month as a string
export function getMonth() {
  return months[new Date().getMonth()];
}

// returns current year
export function getYear() {
  return new Date().getFullYear();
}

// returns the amount of days in the current month
export function getDays() {
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
}

// returns an array with the days of the month
export function createMonthArray() {
  const now = new Date();

  // amount of days in this month
  const days = getDays();
  return new Array(days)
    .fill(0)
    .map(
      (e, index) => new Date(
        now.getFullYear(),
        now.getMonth(),
        index + 1,
      ).getDay(),
    );
}

// returns a nested array with the weeks and days in the month.
// 0-6 are day indexes, sunday = 0 and saturday = 6
// -1 means it is empty due to being in the previous or next month
// example:
// [[-1, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, -1, -1, -1, -1]]
export function getDate() {
  // create a template array with 7 entries of '-1'
  const template = new Array(7).fill(-1);

  // convert array to string for easy manipulation
  const month = createMonthArray().join(',');

  return month
    .split('6,') // split into weeks
    .map((item) => {
      // array of day indexes (0-6)
      const week = item
        .split(',') // split each week back into an array
        .map(dayIndex => (
          dayIndex === '' // if the day index is equal to an empty string, it must be 6, due to prior split.
            ? 6
            : parseInt(dayIndex, 10) // otherwise return the parsed value.
        ));

      // use template array to base the week off of, to always keep a 7 day week.
      return template
        .map((entry, index) => {
          for (let i = 0; i <= week.length; i++) {
            // if the day index matches the index of the template array (0-7)
            // then return the day index
            if (week[i] === index) {
              return week[i];
            }
          }
          // if none match return -1
          return entry;
        });
    });
}
