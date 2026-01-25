/*Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss

 */
let d1=new Date()
console.log("Year:",d1.getFullYear());
console.log("Month:",d1.getMonth()+1);//human readable
console.log("Date:",d1.getDate());
console.log("Day:",d1.getDay());
console.log("Hours:",d1.getHours());
console.log("Minutes:",d1.getMinutes());
console.log("Seconds:",d1.getSeconds());

//format DD-MM-YYYY HH:mm:ss
console.log(`${d1.getDate()}-${d1.getMonth()+1}-${d1.getFullYear()} ${d1.getHours()}:${d1.getMinutes()}:${d1.getSeconds()}`);
/*Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
 */
let Deadline=new Date("2026-01-01");
let today=new Date();
if(today<Deadline){
    console.log("Enrollment Open");
}
else{
    console.log("Enrollment Closed");
}
//validate user input date
function isValidDate(dateString){
    let date=new Date(dateString);
    return date instanceof Date && !isNaN(date);
}
let userInput="2026-02-30";

if(isValidDate(userInput)){
    console.log(`${userInput} is a valid date`);
}
else{
    console.log(`${userInput} is an invalid date`);
}
/*Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years */
let dob=new Date("2000-05-15");
let now=new Date();
let age=now.getFullYear()-dob.getFullYear();
let monthDiff=now.getMonth()-dob.getMonth();
if(monthDiff<0 || (monthDiff===0 && now.getDate()<dob.getDate())){
    age--;
}
console.log("Age is:",age);