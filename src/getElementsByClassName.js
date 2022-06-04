// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  // store node with className
  // check if current item in document has a className of (className)
  // if current node classList contains classname
  // push/add to stored nodes
  // if children nodes exist or are greater than 0
  // recursion
  // return stored nodes

  var nodeArr = [];
  //   access the DOM (document)
  var nodes = function(node) {

    if (Object.values(node.classList).includes(className)) {
      nodeArr.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      nodes(node.children[i]);
    }
  };

  nodes(document.body);

  return nodeArr;
};
