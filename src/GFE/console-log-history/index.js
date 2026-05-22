export default function consoleLogHistory() {
  let logs = [];
  const consoleCopy = globalThis.console;
  const toLog = consoleCopy.log.bind(consoleCopy);
  const toClear = consoleCopy.clear.bind(consoleCopy);
  const newConsole = Object.create(consoleCopy);
  newConsole.log = function (...args) {
    toLog(...args);
    logs.push(args);
  };
  newConsole.clear = function () {
    toClear();
    logs = [];
  };
  globalThis.console = newConsole;
  return function () {
    return logs.slice();
  };
}

const getHistory = consoleLogHistory();

const obj = { count: 1 };
const arr = [1, 2];
const fn = () => "value";
const sym = Symbol("id");

console.log("first");
console.log(1, "two", obj, arr, fn, sym, null, undefined, false);

getHistory();
