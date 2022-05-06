const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = ['Adam', 'Mark', 'Martin', 'Jack', 'Harry', 'George', 'James', 'Michael', 'Richard', 'Peter'];

const femaleNames = ['Grace', 'Susan', 'Lily', 'Alice', 'Cindy', 'Lucy', 'Janet', 'Jane', 'Mary', 'Sophia'];

const lastNames = ['Smith', 'Jones', 'Taylor', 'Robinson', 'Green', 'Jackson', 'Lewis', 'Wood', 'Martin', 'Black'];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (let i=1; i<=20; i++){
  
  const gender = randChoice(genders);

  let firstName = '';
  if(gender === 'M'){
    firstName = randChoice(maleNames);
  } else if (gender === 'F'){
    firstName = randChoice(femaleNames);
  }

  const lastName = randChoice(lastNames);
  
  const age = () => {
    const min = 18;
    const max = 99;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age(),
  };

  people.push(person);
};

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});