function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div div div div.target')
}

function increaseRankBy(n) {
  var theList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i=0; i < theList.length; i++) {
    var currRank = parseInt(theList[i].innerHTML);
    currRank += n;
    theList[i].innerHTML = currRank;
  }
}

function deepestChild() {
  var wholeList = document.querySelectorAll('div#grand-node');
  
  for (var = i; i < wholeList.length; i++) {
    wholeList[i] = i;
  }
  
  return wholeList
}
