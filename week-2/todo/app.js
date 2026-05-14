// Import task functions
const { addTask, getAllTasks, completeTask } = require('./task');

// 1. Add some tasks
addTask("Go shopping", "medium", "2026-12-31");
addTask("Finish project", "high", "2026-11-15");

// 2. Display all tasks
console.log("All tasks:", getAllTasks());

// 3. Complete a task
completeTask(1);

// 4. Display all tasks again
console.log("All tasks after completion:", getAllTasks());
console.log("Module system working correctly.");
console.log("Task Management System Initialized");
console.log("All Tasks:", getAllTasks());
console.log("Updated Tasks:", getAllTasks());

