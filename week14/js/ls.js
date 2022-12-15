"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.readFromLS = readFromLS;
exports.writeToLS = writeToLS;
function readFromLS(t) {
  return JSON.parse(localStorage.getItem(t));
}
function writeToLS(t, e) {
  let r = JSON.stringify(e);
  localStorage.setItem(t, r);
}
