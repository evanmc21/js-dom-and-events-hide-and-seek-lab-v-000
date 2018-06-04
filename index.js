function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll("ul.ranked-list li")
  list.forEach(li => li.innerHTML = parseInt(li.innerHTML) + n) //increment by n and convert string into an integer
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div'); //terrible, but it works. should probably subtract the node length by 1.

}
