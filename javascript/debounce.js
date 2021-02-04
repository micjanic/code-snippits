function debounce(fn, time) {
  let setTimeoutId;

  return function () {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}

const debouncedFn = debounce(() => {
  console.log("test");
}, 300);

debouncedFn();
