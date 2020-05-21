
let person = {
    firstName: "Aileen",
    lastName: "Gallacher",
    age: 37
}
// will output whatever you put in js and converts to a JSON string
// console.log(JSON.stringify(person));    

// will output json string into js format
let jsonPerson = "{\"firstName\":\"Aileen\",\"lastName\":\"Gallacher\",\"age\":37}";
console.log(JSON.parse(jsonPerson));   