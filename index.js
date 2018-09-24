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
  var grandNode = document.querySelector('#grand-node');
  var firstNode = grandNode.children[0];
  for (var i = 0; firstNode.children[i]; i) {
    firstNode = firstNode.children[0]
  }
  return firstNode;
}