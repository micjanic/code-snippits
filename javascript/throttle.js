const throttle = (fn, time) => {
  let throttleFn = false;

  return () => {
    if (!throttleFn) {
      let ctx = this;
      let args = arguments;
      fn.apply(ctx, args);
      throttleFn = true;
      setTimeout(() => {
        throttleFn = false;
      }, time);
    }
  };
};

let counter = 0;

setInterval(
  throttle(() => {
    console.log(counter++);
  }, 1000),
  10
);
