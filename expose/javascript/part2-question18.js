// setInterval(func, delay, param1, param2, ...)

setInterval(function() {
  let d = new Date();   // current date and time
  let time = d.toLocaleTimeString();
  console.log(time)
}, 1000);