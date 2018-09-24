function getFirstSelector(selector) {
  return document.querySelector(selector);
}
 function nestedTarget() {
  return document.querySelector('#nested .target');
}
 function increaseRankBy(n) {
  var rank = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}
 function deepestChild() {
  var grandie = document.querySelector('#grand-node');
  
 }