// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result;
  if (typeof obj === 'string'){ //string
    return '"' + obj + '"';
  } else if (typeof obj === 'function'){ //function
    result = undefined;
  } else if (Array.isArray(obj)) { //array
    if (obj.length){
      var str = "[";
      for (var i = 0; i < obj.length; i++) {
        str = str + stringifyJSON(obj[i]);
        if (i+1 !== obj.length){
          str = str + ",";
        }
      }
       result = str + "]";
        
    } else {
      result = "[]";
    }
  } else if (obj === null){ //null
    result = 'null';
  } else if (typeof obj === 'object') { //object
    var str = "{";
    var count = 0;
    var valuesUndefined = true;
    for (var key in obj){
      str = str + '"' + key + '":' + stringifyJSON(obj[key]);
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        valuesUndefined = false;
      }
      if (++count < Object.keys(obj).length){
        str = str + ",";
      }
    }
    if (valuesUndefined) {
      return "{}";
    }
    result = str + "}";   
  } else{ //everything else
     result = obj;
  }


  //return
  if (typeof obj  === 'string') { 
    return '"'+result+'"';
  } else if (result === undefined){
    return undefined;
  } else if (typeof result === obj) {
    var hasValue = false;
    for (var key in obj) {
      if (typeof obj[key] !== undefined && typeof obj[key] !== 'function')
        hasValue = true;
        break;
    }
    if (hasValue) {
       return '{}';
    }
  } else {
    return result.toString();
  }
};
