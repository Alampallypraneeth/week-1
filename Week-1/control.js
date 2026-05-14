// HANDS-ON 1: Smart Login Status Engine
let isLoggedIn = true;
let isProfileComplete = false;
let message = "";
if (!isLoggedIn) {
    message = "Please login";
}
else if (isLoggedIn && !isProfileComplete) {
    message = "Complete your profile";
} else {
    message = "Welcome back!";
}
console.log(message);
// HANDS-ON 2: Course Price Tag Labeler
let price = 1299;
let courseTag = "";
if (price < 500) {
    courseTag = "Budget Course";
}
else if (price >= 500 && price <= 1000) {
    courseTag = "Standard Course";
} else {
    courseTag = "Premium Course";
}
console.log(courseTag);
// HANDS-ON 3: Enrollment Eligibility Checker
let hasPaid = true;
let hasCompletedBasics = false;
let enrollMessage = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements";
console.log(enrollMessage);
