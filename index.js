function getFirstSelector(selector) {
  return document.querySelector(selector);
}
 function nestedTarget() {
  return document.querySelector('#nested .target');
}
 function increaseRankBy(n) {
  var rank = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rank.length; i++) {
    rank[i] = parseInt(rank[i]) + n
  }
}
 function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
 }