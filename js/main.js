/* const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
];
*/

const tableContents = document.querySelector("#dynamic-links");
const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  /*{
    label: "Week2 notes",
    url: "week2/index.html",
  },
  
  //Uncomment when the second week is made available
  */
];

links.forEach((link) => {
  const list = document.createElement("li");
  const url = document.createElement("a");
  url.setAttribute("href", link.url);
  url.textContent = link.label;
  list.appendChild(url);
  tableContents.appendChild(list);
});