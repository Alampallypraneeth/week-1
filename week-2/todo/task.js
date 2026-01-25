// task.js

// In-memory task list
let tasks = [];
let taskIdCounter = 1;

// Validation helper
function validateTitle(title) {
  return typeof title === 'string' && title.trim().length > 0;
}

// Add a new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) {
    throw new Error("Invalid task title");
  }

  const task = {
    id: taskIdCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return task;
}

// Get all tasks
function getAllTasks() {
  return tasks;
}

// Mark a task as complete
function completeTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) {
    throw new Error(`Task with id ${id} not found`);
  }
  task.completed = true;
  return task;
}

module.exports = { addTask, getAllTasks, completeTask };
console.log("Task module loaded.");
console.log("In-memory task list initialized.");
console.log("Task functions defined: addTask, getAllTasks, completeTask.");
console.log("Module exports set up.");