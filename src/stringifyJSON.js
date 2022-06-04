// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (obj === undefined) {
    return '';
  }

  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    var arrayString = '[';
    if (obj.length > 0) {
      for (var i = 0; i < obj.length; i++) {
        arrayString += stringifyJSON(obj[i]);
        if (i !== obj.length-1) {
          arrayString += ',';
        }
      }
    }
    return arrayString += ']';
  }

 //console.log(typeof null)
  if (typeof obj === "object") {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      //console.log(obj);
      var objString = '{';
      for (var key in obj) {
        if (obj[key] === undefined) {
          return '{}';
        }
      //console.log(stringifyJSON(key));
        objString += stringifyJSON(key);
        objString += ':';
        objString += stringifyJSON(obj[key]);
        if (Object.keys(key.indexOf()) !== Object.keys(obj).length - 1) {
          objString += ',';
        }
      }
      objString += "}";
      objString = objString.slice(0, objString.length - 2) + objString.slice(objString.length - 1, objString.length);
      return objString;
    }


  }

  if (typeof obj === 'number' || typeof boolean) {
    return '' + obj;
  }
};
