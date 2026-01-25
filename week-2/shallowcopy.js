//Shallow Copy 
//given data:
const user = {id: 101,name: "Ravi",preferences: {theme: "dark",language: "english"}};
//create a shallow copy of user
const updatedUser = {...user};
console.log("Shallow Copy of User:", updatedUser);
//making modifications
//name in the copied object
updatedUser.name = "Shivaaaaaa";
console.log("Updated Name in Copied Object:", updatedUser.name);
//preferences.theme in the copied object
updatedUser.preferences.theme = "light";
console.log("Updated Theme in Copied Object:", updatedUser.preferences.theme);
//.log both original and copied objects
console.log("Original User:", user);
console.log("Updated User:", updatedUser);
//Observe what changes and what doesn’t
//Original User: { id: 101, name: 'Ravi', preferences: { theme: 'light', language: 'english' } }
//Updated User: { id: 101, name: 'Raj', preferences: { theme: 'light', language: 'english' } }
//In this case, the name property change in updatedUser does not affect user.