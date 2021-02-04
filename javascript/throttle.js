const throttle = (fn, delay) => {
  let inDebounce;

  return function () {
    if (inDebounce) {
      return;
    }
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};

const throttleFn = throttle(() => {
  console.log("hello");
}, 300);

throttleFn();
throttleFn();
throttleFn();
throttleFn();
throttleFn();
