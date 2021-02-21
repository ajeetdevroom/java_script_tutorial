console.log("regular expression learning js file is attached now.");
// fie test

let rgx_str="ajeet kumar verma";
// string

let rgx_exp=/verma/;
// RegExp syntax:  /patten/modifiers 

let result=rgx_exp.exec(rgx_str);
console.log(result);
// return a array

let new_result=rgx_exp.toString(rgx_str);
console.log(new_result);
// /ver[0-9]ma/

let source_result=rgx_exp.source;
console.log(source_result);
// ver[0-9]ma

let test_result=rgx_exp.test(rgx_str);
console.log(test_result);
// true

let search_result = rgx_str.search("kumar");
console.log(search_result);
// return search index


// let replace_result = rgx_str.replace("kumar","k.");
let replace_result = rgx_str.replace(/kumar/i,"k.");
console.log(replace_result);
// after replace return strung 


console.log("Orignal string " + rgx_str);

console.log(/e/.exec("ajeet kumar verma"));

