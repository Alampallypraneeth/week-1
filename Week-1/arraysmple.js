
const temperatures = [32, 35, 28, 40, 38, 30, 42];
// 1. filter() temperatures above 35
const above35 = temperatures.filter(temp => temp > 35);
console.log("Temperatures above 35:", above35);
// 2. map() to convert all temperatures from Celsius → Fahrenheit
const toFahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", toFahrenheit);
// 3. reduce() to calculate average temperature
const avgTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature:", avgTemperature);
// 4. find() first temperature above 40
const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First Temperature above 40:", firstAbove40);
// 5. findIndex() of temperature 28
const indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of Temperature 28:", indexOf28);
const courses = ["javascript", "react", "node", "mongodb", "express"];
// 1. filter() courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Courses with name length > 5:", longCourses);
// 2. map() to convert course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Courses in Uppercase:", upperCaseCourses);
// 3. reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = upperCaseCourses.reduce((acc, course) => acc ? `${acc} | ${course}` : course, "");
console.log("Course String:", courseString);
// 4. find() the course "react"
const findReact = courses.find(course => course === "react");
console.log("Found Course 'react':", findReact);
// 5. findIndex() of "node"
const indexOfNode = courses.findIndex(course => course === "node");
console.log("Index of 'node':", indexOfNode);
const marks = [78, 92, 35, 88, 40, 67];
// 1. filter() marks ≥ 40 (pass marks)
const passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks (≥ 40):", passMarks);
// 2. map() to add 5 grace marks to each student
const marksWithGrace = marks.map(mark => mark + 5);
console.log("Marks with 5 Grace Marks:", marksWithGrace);
// 3. reduce() to find highest mark
const highestMark = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log("Highest Mark:", highestMark);
// 4. find() first mark below 40
const firstBelow40 = marks.find(mark => mark < 40);
console.log("First Mark below 40:", firstBelow40);
// 5. findIndex() of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of Mark 92:", indexOf92);


