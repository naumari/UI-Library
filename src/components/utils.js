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

export const getScrollBarWidth = function () {
  const outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
};

export const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);