/* eslint-disable no-console */
type Person = {
  name: string;
  age: number;
  hobbies: string[];
};

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Jim",
  "Jane",
  "Jeremiah",
  "zach",
];
const hobbiesList = [
  "Reading",
  "Hiking",
  "Cooking",
  "Gaming",
  "Traveling",
  "Backpacking",
  "Canoeing",
];

function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  // eslint-disable-next-line security/detect-object-injection
  return array[randomIndex];
}

function generateRandomPerson(): Person {
  const name = getRandomElement(names);
  const age = Math.floor(Math.random() * 40) + 18;
  const numHobbies = Math.floor(Math.random() * 4) + 1;
  const hobbies: string[] = [];

  for (let i = 0; i < numHobbies; i++) {
    const hobby = getRandomElement(hobbiesList);
    hobbies.push(hobby);
  }

  const person: Person = { name, age, hobbies };

  return person;
}

function generateRandomPeopleList(numPeople: number): Person[] {
  const people: Person[] = [];

  for (let i = 0; i < numPeople; i++) {
    const person = generateRandomPerson();
    people.push(person);
  }

  return people;
}

const randomPeopleList = generateRandomPeopleList(10);

console.log("Random People List:");
console.log(randomPeopleList);
