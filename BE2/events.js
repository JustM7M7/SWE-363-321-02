const EventEmitter = require("node:events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// const userLoggedIn = () => {};
myEmitter.on("event", () => {
  Math.random() > 0.5
    ? console.log(`TIMESTAMP:${Date.now()} userLoggedIn`)
    : console.log(`TIMESTAMP:${Date.now()} userLoggedOut`);
});
setInterval(
  () => {
    myEmitter.emit("event");
  },
  Math.floor(Math.random() * 2000 + 100),
);
