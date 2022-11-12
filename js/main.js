/* const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
];
*/

const dynamic_Contents = document.querySelector("#dynamic-links");
const links = [
  {
    label: "Week 1 Notes",
    url: "week1/index.html",
  },
  {
    label: "Week 2 Notes",
    url: "week2/index.html",
  },
  {
    label: "Week 2 Team Assignment",
    url: "week2/teamwork.html",
  },
  {
    label: "Week 3 Notes",
    url: "week3/index.html",
  },
  {
    label: "Week 3 Team Assignment",
    url: "week3/teamwork.html",
  },
  {
    label: "Week 4 Notes",
    url: "week3/index.html",
  },
  {
    label: "Week 4 Team Assignment",
    url: "week4/teamwork.html",
  },
  {
    label: "Week 5 Notes",
    url: "week5/index.html",
  },
  {
    label: "Week5 Team Assignment",
    url: "week5/teamwork.html",
  },
  {
    label: "Week6 Todo",
    url: "week6/index.html",
  },
  {
    label: "Week 7 Notes ",
    url: "week7/index.html",
  },
  {
    label: "Week 7 Team Assignment ",
    url: "week7/teamwork.html",
  },
  {
    label: "Week 8 Notes ",
    url: "week8/index.html",
  },
  {
    label: "Week 8 Team Assignment ",
    url: "week8/teamwork.html",
  },
  {
    label: "Week 9 Notes ",
    url: "week9/index.html",
  },
  {
    label: "Week 9 Team Assignment ",
    url: "week9/teamwork.html",
  },
  //Uncomment when the second week is made available
];

links.forEach((link) => {
  const list = document.createElement("li");
  const url = document.createElement("a");
  url.setAttribute("href", link.url);
  url.textContent = link.label;
  list.appendChild(url);
  dynamic_Contents.appendChild(list);
});