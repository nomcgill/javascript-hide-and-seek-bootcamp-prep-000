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
  var firstNode = grandNode.children:firstChild;
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}