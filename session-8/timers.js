// Timers:

const TIMER_SECONDS = 5000; // 5 SECONDS
const sayMessage = () => {
  console.log("Hello from sayMessage");
};

setTimeout(sayMessage, TIMER_SECONDS);

// Interval:
setInterval(function () {
  console.log("Hello from interval");
}, TIMER_SECONDS);

// Remove in the interval:
const timer = setInterval(function () {
  console.log("Running every 2 seconds");
}, 10);

clearInterval(timer);
