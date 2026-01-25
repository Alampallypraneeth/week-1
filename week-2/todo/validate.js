function validateTitle(title) {
    return typeof title === 'string' && title.trim().length >= 3;
  }
  
  function validatePriority(priority) {
    return ['low', 'medium', 'high'].includes(priority);
  }
  
  function validateDueDate(date) {
    const dueDate = new Date(date);
    const now = new Date();
    return dueDate instanceof Date && !isNaN(dueDate) && dueDate > now;
  }
  
  module.exports = { validateTitle, validatePriority, validateDueDate };
console.log("Operators.js loaded successfully.");
console.log("Available functions: validateTitle, validatePriority, validateDueDate.");
console.log("Usage examples:");
console.log("validateTitle('My Task') =>", validateTitle('My Task'));
console.log("validatePriority('high') =>", validatePriority('high'));
console.log("validateDueDate('2024-12-31') =>", validateDueDate('2024-12-31'));