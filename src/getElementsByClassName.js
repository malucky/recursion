// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var rootNode = document.body;
  var foundElements = [];
  var findClass = function(node){
    if (node.hasChildNodes) {
      var children = node.childNodes;
      for (var i = 0; i < children.length; i++) {
        var currNode = children[i];
        if (currNode.classList && currNode.classList.contains(className)) {
          foundElements.push(currNode);
        }
        findClass(currNode);
      }
    }
  };
  findClass(rootNode);
  return foundElements;
};

