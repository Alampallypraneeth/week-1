// Assignment 1: User Profile Manager
const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
  };

    // 1. Read and print the user’s name and email
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    // 2. Add a new property lastLogin: "2026-01-01"
    user.lastLogin = "2026-01-01";
    // 3. Update role from "student" to "admin"
    user.role = "admin";
    // 4. Delete the isActive property
    delete user.isActive;
    // 5. Use Object.keys() to list all remaining fields
    console.log("Remaining fields:", Object.keys(user));


// Assignment 2: Exam Result Summary
const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
  };
  
    // 1. Calculate total marks
    const totalMarks = Object.values(marks).reduce((total, mark) => total + mark, 0);
    console.log("Total Marks:", totalMarks);
    // 2. Calculate average marks
    const averageMarks = totalMarks / Object.keys(marks).length;
    console.log("Average Marks:", averageMarks);
    // 3. Find the highest scoring subject
    const highestSubject = Object.keys(marks).reduce((highest, subject) => 
        marks[subject] > marks[highest] ? subject : highest, Object.keys(marks)[0]);
    console.log("Highest Scoring Subject:", highestSubject);
    // 4. Add a new subject computer: 90
    marks.computer = 90;
    console.log("Updated Marks:", marks);
// Assignment 3: Application Settings Controller
const settings = {
    theme: "light",
    notifications: true,
    autoSave: false,
    language: "en"
  };
    // 1.Toggle theme between "light" and "dark"
    settings.theme = settings.theme === "light" ? "dark" : "light";
    // 2. Turn autoSave to true
    settings.autoSave = true;
    // 3. Remove the notifications setting
    delete settings.notifications;
    // 4. Freeze the settings object so it cannot be modified
    Object.freeze(settings);
    console.log("Final Settings:", settings);
    // Attempting to modify after freeze (will not work)
    settings.language = "fr"; // This will not change the language
    console.log("After Attempted Modification:", settings);
