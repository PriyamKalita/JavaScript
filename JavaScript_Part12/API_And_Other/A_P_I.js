let jsonRes = '{"fact":"It is estimated that cats can make over 60 different sounds.","length":60}';

let validRes = JSON.parse(jsonRes); // Convert json Data to Js Object
console.log(jsonRes);

let student = {
    name : "Priyam",
    mark : 90
};

let valRes = JSON.stringify(student); // Convert Js Object to json Data  
console.log(valRes);