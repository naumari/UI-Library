export const isNum = num =>
  !isNaN(num * 1) &&
  Object.prototype.toString.call(num * 1) === "[object Number]"

export const isEqualDay = function ({
  year,
  month,
  day
}, anotherDay) {
  return !!anotherDay && year === anotherDay.getFullYear() && month === anotherDay.getMonth() && day === anotherDay.getDate()
}

export const dateToObj = function (date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  }
}
