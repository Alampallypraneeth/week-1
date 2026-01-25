//Test data:
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];
//operations on the test data:
//get only active users
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);
//extract only names of active users
const activeUserNames = activeUsers.map(user => user.name);
console.log("Active User Names:", activeUserNames);
//check if any admin exists
const hasAdmin = users.some(user => user.role === "admin");
console.log("Is there any admin?", hasAdmin);
//find user with id =2
const userWithId2 = users.find(user => user.id === 2);
console.log("User with ID 2:", userWithId2);
//create a new array where ravi becomes inactive
const updatedUsers = users.map(user => 
  user.name === "Ravi" ? { ...user, active: false } : user
);
console.log("Updated Users:", updatedUsers);


//Hands on 2

//Test data:
  const cart = [
  { id: 101, product: "Laptop", price: 50000, qty: 1 },
  { id: 102, product: "Mouse", price: 500, qty: 2 }
];
//calculate total cart value
let totalValue = 0;
for (let item of cart) {
  totalValue += item.price * item.qty;
}
console.log("Total Cart Value:", totalValue);

//Increase quantity of Mouse to 3 (immutably)
const updatedCart = cart.map(item => {
  if (item.product === "Mouse") {
    return {item, qty: 3 };
  }
  return item;
});

//Remove Laptop from cart
const filteredCart = cart.filter(item => item.product !== "Laptop");
console.log("Filtered Cart:", filteredCart);
console.log("Updated Cart:", updatedCart);
console.log("Original Cart:", cart);

//Extract only { product, totalPrice } per item
const simplifiedcart = cart.map(item => ({
  product: item.product,
  totalPrice: item.price * item.qty
}));
console.log("simplified cart:", simplifiedcart);

//Check if all items cost more than ₹300
const above300 = cart.every(item => item.price > 300);
console.log("All items cost more than ₹300:", above300);

//Check if any item has quantity more than 1
const anyQtyMoreThan1 = cart.some(item => item.qty > 1);
console.log("Any item has quantity more than 1:", anyQtyMoreThan1);

// hands on 3:
// test data:
const students = [
    { name: "Asha", marks: [80, 75, 90] },
    { name: "Kiran", marks: [60, 55, 70] },
    { name: "Meena", marks: [95, 92, 88] }
];

// Calculate average marks per student
students.forEach(student => {
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    const avgMarks = totalMarks / student.marks.length;
    console.log(`Average marks of ${student.name}:`, avgMarks);
});

// Create a new array with { name, average }
const studentsWithAvg = students.map(student => {
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    const avgMarks = totalMarks / student.marks.length;
    return { name: student.name, average: avgMarks };
});
console.log("Students with Average Marks:", studentsWithAvg);

// Find students with average > 80
const topStudents = studentsWithAvg.filter(student => student.average > 80);
console.log("Students with Average > 80:", topStudents);

// Check if any student failed (average < 40)
const anyFailed = studentsWithAvg.some(student => student.average < 40);
console.log("Did any student fail?", anyFailed);

// Extract only student names who passed
const passedStudentNames = studentsWithAvg
    .filter(student => student.average >= 40)
    .map(student => student.name);
console.log("Names of Students who passed:", passedStudentNames);


// hands on 4:
// test data:
const roles = {
    admin: ["create", "update", "delete", "view"],
    editor: ["update", "view"],
    viewer: ["view"]
};

// Get all role names
const roleNames = Object.keys(roles);
console.log("Role Names:", roleNames);

// Check if editor can delete
const editorCanDelete = roles.editor.includes("delete");
console.log("Can editor delete?", editorCanDelete);

// Create a flat array of all unique permissions
const allPermissions = [...new Set(Object.values(roles).flat())];
console.log("All Unique Permissions:", allPermissions);

// Add a new role moderator with permissions (immutably)
const updatedRoles = { ...roles, moderator: ["update", "view"] };
console.log("Updated Roles with Moderator:", updatedRoles);

// Convert roles object into array of { role, permissionsCount }
const rolesArray = Object.entries(roles).map(([role, permissions]) => ({
    role,
    permissionsCount: permissions.length
}));
console.log("Roles with Permissions Count:", rolesArray);


// hands on 5:
// test data:
const apiResponse = {
    status: "success",
    data: [
        { id: 1, title: "JS Basics", price: 999, published: true },
        { id: 2, title: "React", price: 1499, published: false },
        { id: 3, title: "Node", price: 1299, published: true }
    ]
};

// Extract only the data array (destructuring)
const { data: courses } = apiResponse;
console.log("Courses Data:", courses);

// Get only published courses
const publishedCourses = courses.filter(course => course.published);
console.log("Published Courses:", publishedCourses);

// Sort courses by price (high → low)
const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log("Courses Sorted by Price (High to Low):", sortedCourses);

// Create a list of course titles
const courseTitles = courses.map(course => course.title);
console.log("Course Titles:", courseTitles);

// Calculate total price of published courses
const totalPublishedPrice = publishedCourses.reduce((total, course) => total + course.price, 0);
console.log("Total Price of Published Courses:", totalPublishedPrice);