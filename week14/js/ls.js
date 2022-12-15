export function readFromLS(t) {
  return JSON.parse(localStorage.getItem(t));
}
export function writeToLS(t, e) {
  let r = JSON.stringify(e);
  localStorage.setItem(t, r);
}
