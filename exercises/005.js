/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  // your code here

  let out = []

  // Loop through array of people (outer)
  for (let index = 0; index < array.length; index++) {
    var person = array[index];
    var personObj = {}


    // Loop through properties of person (inner)
    for (let i = 0; i < person.length; i++) {
      const prop = person[i]
      personObj[prop[0]] = prop[1]
    }
    out.push(personObj)
  }

  return out
}
