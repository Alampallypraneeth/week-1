// Test Data :
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
  ];
  // 1. Use filter() to get only inStock products
  const inStockProducts = cart.filter(item => item.inStock);
  console.log("In-Stock Products:", inStockProducts);
  // 2. Use map() to create a new array with:  { name, totalPrice }
  const productTotals = inStockProducts.map(item => ({
    name: item.name,
    totalPrice: item.price * item.quantity
  }));
  console.log("Product Totals:", productTotals);
  // 3. Use reduce() to calculate grand total cart value
  const grandTotal = productTotals.reduce((total, item) => total + item.totalPrice, 0);
  console.log("Grand Total Cart Value:", grandTotal);
  // 4. Use find() to get details of "Mouse"
  const mouseDetails = cart.find(item => item.name === "Mouse");
  console.log("Mouse Details:", mouseDetails);
  // 5. Use findIndex() to find the position of "Keyboard"
  const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
  console.log("Index of Keyboard:", keyboardIndex);
  // Test Data:
  const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
  ];
  // 1. filter() students who passed (marks ≥ 40)
  const passedStudents = students.filter(student => student.marks >= 40);
  console.log("Passed Students:", passedStudents);
  // 2. map() to add a grade field
  const studentsWithGrades = students.map(student => {
    let grade;
    if (student.marks >= 90) {
      grade = 'A';
    } else if (student.marks >= 75) {
      grade = 'B';
    } else if (student.marks >= 60) {
      grade = 'C';
    } else {
      grade = 'D';
    }
    return { ...student, grade };
  });
  console.log("Students with Grades:", studentsWithGrades);
  // 3. reduce() to calculate average marks
  const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
  const averageMarks = totalMarks / students.length;
  console.log("Average Marks:", averageMarks);
  // 4. find() the student who scored 92
  const studentWith92 = students.find(student => student.marks === 92);
  console.log("Student with 92 Marks:", studentWith92);
  // 5. findIndex() of student "Kiran"
  const kiranIndex = students.findIndex(student => student.name === "Kiran");
  console.log("Index of Kiran:", kiranIndex);
  // Test data:
  const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
  ];
  // 1. filter() employees from IT department
  const itEmployees = employees.filter(emp => emp.department === "IT");
  console.log("IT Employees:", itEmployees);
  // 2. map() to add: netSalary = salary + 10% bonus
  const employeesWithNetSalary = employees.map(emp => ({
    ...emp,
    netSalary: emp.salary + emp.salary * 0.10
  }));
  console.log("Employees with Net Salary:", employeesWithNetSalary);
  // 3. reduce() to calculate total salary payout
  const totalSalaryPayout = employees.reduce((total, emp) => total + emp.salary, 0);
  console.log("Total Salary Payout:", totalSalaryPayout);
  // 4. find() employee with salary 30000
  const employeeWith30000 = employees.find(emp => emp.salary === 30000);
  console.log("Employee with Salary 30000:", employeeWith30000);
  // 5. findIndex() of employee "Neha"
  const nehaIndex = employees.findIndex(emp => emp.name === "Neha");
  console.log("Index of Neha:", nehaIndex);
  // Test data:
  const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
  ];
  // 1. filter() only "Sci-Fi" movies
  const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
  console.log("Sci-Fi Movies:", sciFiMovies);
  // 2. map() to return: "Inception (8.8)"
  const movieTitlesWithRatings = sciFiMovies.map(movie => `${movie.title} (${movie.rating})`);
  console.log("Movie Titles with Ratings:", movieTitlesWithRatings);
  // 3. reduce() to find average movie rating
  const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
  const averageRating = totalRating / movies.length;
  console.log("Average Movie Rating:", averageRating);
  // 4. find() movie "Joker"
  const jokerMovie = movies.find(movie => movie.title === "Joker");
  console.log("Joker Movie Details:", jokerMovie);
  // 5. findIndex() of "Avengers"
  const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
  console.log("Index of Avengers:", avengersIndex);
  // Test data:
  const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
  ];
  // 1. filter() all credit transactions
  const creditTransactions = transactions.filter(txn => txn.type === "credit");
  console.log("Credit Transactions:", creditTransactions);
  // 2. map() to extract only transaction amounts
  const transactionAmounts = transactions.map(txn => txn.amount);
  console.log("Transaction Amounts:", transactionAmounts);
  // 3. reduce() to calculate final account balance
  const finalBalance = transactions.reduce((balance, txn) => {
    return txn.type === "credit" ? balance + txn.amount : balance - txn.amount;
  }, 0);
  console.log("Final Account Balance:", finalBalance);
  // 4. find() the first debit transaction
  const firstDebitTransaction = transactions.find(txn => txn.type === "debit");
  console.log("First Debit Transaction:", firstDebitTransaction);
  // 5. findIndex() of transaction with amount 10000
  const txnIndex10000 = transactions.findIndex(txn => txn.amount === 10000);
  console.log("Index of Transaction with Amount 10000:", txnIndex10000);