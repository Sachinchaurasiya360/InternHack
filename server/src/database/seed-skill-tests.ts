import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = process.env["DATABASE_URL"] ?? "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface TestSeed {
  skillName: string;
  title: string;
  description: string;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  timeLimitSecs: number;
  passThreshold: number;
  questions: Question[];
}

const tests: TestSeed[] = [
  {
    skillName: "javascript",
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of core JavaScript concepts including closures, prototypes, async patterns, and ES6+ features.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the output of typeof null?", options: ["\"null\"", "\"object\"", "\"undefined\"", "\"boolean\""], correctIndex: 1, explanation: "typeof null returns \"object\" — this is a well-known bug in JavaScript that has been preserved for backward compatibility." },
      { question: "Which method creates a new array with the results of calling a function on every element?", options: ["forEach()", "map()", "filter()", "reduce()"], correctIndex: 1, explanation: "map() creates a new array by calling a function on each element. forEach() doesn't return anything, filter() returns a subset, and reduce() returns a single value." },
      { question: "What does the '===' operator check?", options: ["Value only", "Type only", "Value and type", "Reference only"], correctIndex: 2, explanation: "The strict equality operator (===) checks both value AND type without type coercion, unlike == which performs type coercion." },
      { question: "What is a closure in JavaScript?", options: ["A way to close the browser", "A function with access to its outer scope's variables", "A method to end a loop", "A type of error handling"], correctIndex: 1, explanation: "A closure is a function that retains access to variables from its enclosing (outer) scope even after the outer function has returned." },
      { question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?", options: ["true", "false", "undefined", "NaN"], correctIndex: 1, explanation: "Due to floating-point precision, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3, so the comparison returns false." },
      { question: "Which keyword declares a block-scoped variable?", options: ["var", "let", "function", "global"], correctIndex: 1, explanation: "let (and const) declare block-scoped variables. var is function-scoped and hoisted to the function level." },
      { question: "What does Promise.all() do?", options: ["Runs promises sequentially", "Resolves when all promises resolve, rejects if any rejects", "Returns the first resolved promise", "Cancels all pending promises"], correctIndex: 1, explanation: "Promise.all() takes an array of promises and resolves when all of them resolve. If any promise rejects, the entire Promise.all() rejects." },
      { question: "What is event delegation?", options: ["Assigning events to every child element", "Attaching a single event listener to a parent element", "Preventing event propagation", "Creating custom events"], correctIndex: 1, explanation: "Event delegation uses event bubbling to attach a single listener to a parent element, which handles events from its children, improving performance." },
      { question: "What is the purpose of the 'this' keyword?", options: ["Refers to the current file", "Refers to the calling object's context", "Creates a new variable", "Imports a module"], correctIndex: 1, explanation: "The 'this' keyword refers to the object that is executing the current function. Its value depends on how the function is called." },
      { question: "Which array method returns a single value from an array?", options: ["map()", "filter()", "reduce()", "concat()"], correctIndex: 2, explanation: "reduce() executes a reducer function on each element, resulting in a single output value. It's used for summing, flattening, or accumulating values." },
      { question: "What is hoisting in JavaScript?", options: ["Moving code to a server", "Variable and function declarations moved to the top of their scope", "Lazy loading of scripts", "Minifying code"], correctIndex: 1, explanation: "Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope during compilation." },
      { question: "What does the spread operator (...) do?", options: ["Copies all properties of an object/array", "Deletes elements", "Creates a loop", "Defines a generator"], correctIndex: 0, explanation: "The spread operator expands iterables (arrays, objects) into individual elements. It's used for copying, merging, and passing arguments." },
      { question: "What is the difference between null and undefined?", options: ["They are identical", "null is assigned intentionally, undefined means not assigned", "undefined is an error", "null is only for objects"], correctIndex: 1, explanation: "undefined means a variable has been declared but not assigned a value. null is an intentional assignment indicating 'no value'." },
      { question: "What does async/await do?", options: ["Makes code run faster", "Provides syntactic sugar over promises for async code", "Creates new threads", "Blocks the event loop"], correctIndex: 1, explanation: "async/await is syntactic sugar over promises that makes asynchronous code look and behave more like synchronous code, improving readability." },
      { question: "What is the output of: [1,2,3].map(String)?", options: ["[1,2,3]", "[\"1\",\"2\",\"3\"]", "\"123\"", "NaN"], correctIndex: 1, explanation: "map(String) calls String() on each element, converting numbers to their string representations, resulting in [\"1\",\"2\",\"3\"]." },
    ],
  },
  {
    skillName: "python",
    title: "Python Programming",
    description: "Assess your Python skills covering data structures, OOP, comprehensions, decorators, and standard library.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the output of: list('hello')?", options: ["['hello']", "['h','e','l','l','o']", "'hello'", "Error"], correctIndex: 1, explanation: "list() on a string iterates over each character, creating a list of individual characters." },
      { question: "Which data structure is unordered and has unique keys?", options: ["List", "Tuple", "Dictionary", "Set"], correctIndex: 2, explanation: "Dictionaries have unique keys and are unordered (insertion-ordered since Python 3.7). Sets have unique elements but no key-value pairs." },
      { question: "What does the 'self' parameter represent in a class method?", options: ["The class itself", "The instance of the class", "A static variable", "A global reference"], correctIndex: 1, explanation: "'self' refers to the current instance of the class. It allows access to instance attributes and methods." },
      { question: "What is a list comprehension?", options: ["A way to understand lists", "A concise way to create lists from iterables", "A method to sort lists", "A documentation format"], correctIndex: 1, explanation: "List comprehensions provide a concise syntax to create lists: [expression for item in iterable if condition]." },
      { question: "What does the 'yield' keyword do?", options: ["Stops the program", "Returns a value and pauses the generator function", "Creates a new thread", "Imports a module"], correctIndex: 1, explanation: "'yield' pauses the function, saves its state, and returns a value. On the next call, execution resumes from where it left off." },
      { question: "Which of these is immutable in Python?", options: ["List", "Dictionary", "Set", "Tuple"], correctIndex: 3, explanation: "Tuples are immutable — once created, their elements cannot be changed. Lists, dicts, and sets are all mutable." },
      { question: "What is the purpose of __init__ in a Python class?", options: ["Destructor method", "Constructor/initializer method", "Static method", "Class method"], correctIndex: 1, explanation: "__init__ is the initializer method called when a new instance is created. It sets up initial attribute values." },
      { question: "What does 'lambda' create?", options: ["A named function", "An anonymous function", "A class", "A module"], correctIndex: 1, explanation: "lambda creates small anonymous functions: lambda args: expression. They are limited to a single expression." },
      { question: "What is the output of: bool([])?", options: ["True", "False", "None", "Error"], correctIndex: 1, explanation: "Empty containers ([], {}, '', set()) are falsy in Python. bool([]) returns False." },
      { question: "What does *args do in a function definition?", options: ["Creates a list argument", "Accepts variable number of positional arguments as a tuple", "Unpacks a dictionary", "Defines default arguments"], correctIndex: 1, explanation: "*args collects extra positional arguments into a tuple. **kwargs does the same for keyword arguments as a dictionary." },
      { question: "Which method adds an element to the end of a list?", options: ["add()", "append()", "insert()", "extend()"], correctIndex: 1, explanation: "append() adds a single element to the end. extend() adds multiple elements, insert() adds at a specific position." },
      { question: "What is a decorator in Python?", options: ["A design pattern for UI", "A function that modifies another function's behavior", "A comment style", "A type annotation"], correctIndex: 1, explanation: "Decorators are functions that wrap other functions to extend their behavior without modifying their code, using @decorator syntax." },
      { question: "What does enumerate() return?", options: ["Just the values", "Index-value pairs", "Only indices", "A dictionary"], correctIndex: 1, explanation: "enumerate() returns an iterator of (index, value) tuples from an iterable, useful for tracking position in loops." },
      { question: "What is the difference between '==' and 'is'?", options: ["No difference", "'==' checks value, 'is' checks identity (same object)", "'is' is faster", "'==' is deprecated"], correctIndex: 1, explanation: "'==' compares values (equality), while 'is' checks if two references point to the exact same object in memory (identity)." },
      { question: "What does try/except/finally do?", options: ["Loops through code", "Handles exceptions — try runs code, except catches errors, finally always runs", "Defines a function", "Imports modules"], correctIndex: 1, explanation: "try/except handles exceptions: try block runs code, except catches specific errors, finally block executes regardless of whether an exception occurred." },
    ],
  },
  {
    skillName: "react",
    title: "React Development",
    description: "Test your React knowledge including hooks, component lifecycle, state management, and best practices.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the virtual DOM?", options: ["A browser API", "A lightweight copy of the real DOM for efficient updates", "A CSS framework", "A testing tool"], correctIndex: 1, explanation: "The virtual DOM is React's in-memory representation of the real DOM. React diffs the virtual DOM to determine minimal real DOM updates." },
      { question: "What does useState return?", options: ["Just the state value", "An array with [state, setState]", "An object", "A promise"], correctIndex: 1, explanation: "useState returns an array with two elements: the current state value and a function to update it." },
      { question: "When does useEffect with an empty dependency array run?", options: ["Every render", "Only on mount (and cleanup on unmount)", "Never", "On every state change"], correctIndex: 1, explanation: "useEffect with [] runs once after the initial render (mount) and its cleanup runs on unmount, similar to componentDidMount/componentWillUnmount." },
      { question: "What is the purpose of keys in React lists?", options: ["Styling elements", "Helping React identify which items changed, added, or removed", "Sorting elements", "Creating unique IDs"], correctIndex: 1, explanation: "Keys help React's reconciliation algorithm identify which list items have changed, been added, or removed, enabling efficient re-renders." },
      { question: "What is props drilling?", options: ["A testing technique", "Passing props through multiple component layers", "A performance optimization", "A routing method"], correctIndex: 1, explanation: "Props drilling is passing data through many intermediate components that don't need the data, just to reach a deeply nested child component." },
      { question: "What does useCallback do?", options: ["Calls a function immediately", "Memoizes a callback function to prevent unnecessary re-creation", "Creates a new component", "Handles errors"], correctIndex: 1, explanation: "useCallback returns a memoized version of the callback that only changes if its dependencies change, preventing unnecessary re-renders of child components." },
      { question: "What is JSX?", options: ["A new programming language", "A syntax extension that allows writing HTML-like code in JavaScript", "A database query language", "A CSS preprocessor"], correctIndex: 1, explanation: "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside JS. It gets transpiled to React.createElement() calls." },
      { question: "What is the Context API used for?", options: ["Making API calls", "Sharing state across components without prop drilling", "Routing", "Form validation"], correctIndex: 1, explanation: "React Context provides a way to share values (state, functions) across the component tree without explicitly passing props at every level." },
      { question: "What is the difference between controlled and uncontrolled components?", options: ["Controlled are faster", "Controlled components have state managed by React, uncontrolled use DOM refs", "No difference", "Uncontrolled are deprecated"], correctIndex: 1, explanation: "Controlled components have their value driven by React state. Uncontrolled components store their own state in the DOM, accessed via refs." },
      { question: "What does React.memo do?", options: ["Creates a memo note", "Memoizes a component to skip re-rendering if props haven't changed", "Stores data in memory", "Logs component state"], correctIndex: 1, explanation: "React.memo is a higher-order component that memoizes the result. If props haven't changed, React skips rendering the component." },
      { question: "What is a React fragment?", options: ["A broken component", "A way to group elements without adding extra DOM nodes", "A code snippet", "A debugging tool"], correctIndex: 1, explanation: "Fragments (<></> or <Fragment>) let you group multiple children without adding an extra wrapper DOM node." },
      { question: "What hook would you use to store a mutable value that doesn't cause re-renders?", options: ["useState", "useEffect", "useRef", "useMemo"], correctIndex: 2, explanation: "useRef returns a mutable ref object whose .current property persists across renders without causing re-renders when changed." },
      { question: "What is the purpose of useReducer?", options: ["Reducing bundle size", "Managing complex state logic with a reducer function", "Reducing API calls", "Optimizing renders"], correctIndex: 1, explanation: "useReducer is an alternative to useState for complex state logic. It accepts a reducer function and returns state with a dispatch function." },
      { question: "What happens when you call setState?", options: ["State updates immediately", "React schedules a re-render with the new state", "Component unmounts", "Nothing happens"], correctIndex: 1, explanation: "setState is asynchronous — React batches state updates and schedules a re-render. The state is not immediately updated after calling setState." },
      { question: "What is a custom hook?", options: ["A built-in React feature", "A function starting with 'use' that composes other hooks", "A CSS animation", "A routing mechanism"], correctIndex: 1, explanation: "Custom hooks are functions prefixed with 'use' that encapsulate reusable stateful logic by composing built-in hooks." },
    ],
  },
  {
    skillName: "nodejs",
    title: "Node.js Backend Development",
    description: "Test your Node.js skills including event loop, streams, modules, Express, and async patterns.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the event loop in Node.js?", options: ["A for loop for events", "A mechanism that handles async operations by offloading tasks and processing callbacks", "A UI rendering engine", "A database connection pool"], correctIndex: 1, explanation: "The event loop allows Node.js to perform non-blocking I/O by offloading operations to the OS kernel and processing callbacks when operations complete." },
      { question: "What is the purpose of package.json?", options: ["Runtime configuration", "Project metadata, dependencies, and scripts", "Database schema", "Logging configuration"], correctIndex: 1, explanation: "package.json defines project metadata (name, version), dependencies, scripts, and configuration for a Node.js project." },
      { question: "What is middleware in Express?", options: ["Database layer", "Functions with access to req, res, and next that process requests in sequence", "Frontend code", "A testing framework"], correctIndex: 1, explanation: "Middleware functions have access to request, response, and next. They can modify req/res, end the request, or call next() to pass control." },
      { question: "What does require() do?", options: ["Downloads a package", "Imports and caches a module", "Creates a new file", "Starts a server"], correctIndex: 1, explanation: "require() loads a module, executes it, and caches the result. Subsequent require() calls return the cached module." },
      { question: "What is the difference between process.nextTick() and setImmediate()?", options: ["They are identical", "nextTick runs before I/O callbacks, setImmediate runs after", "setImmediate is faster", "nextTick is deprecated"], correctIndex: 1, explanation: "process.nextTick() fires before any I/O events in the current iteration. setImmediate() fires after I/O events in the current iteration." },
      { question: "What are streams in Node.js?", options: ["Video playback tools", "Objects for reading/writing data in chunks rather than all at once", "Database connections", "HTTP headers"], correctIndex: 1, explanation: "Streams process data in chunks, enabling efficient handling of large datasets without loading everything into memory." },
      { question: "What does the 'cluster' module do?", options: ["Groups files together", "Creates child processes to share the server port for multi-core utilization", "Manages databases", "Handles authentication"], correctIndex: 1, explanation: "The cluster module forks the main process into worker processes, allowing Node.js to utilize multiple CPU cores." },
      { question: "What is the purpose of .env files?", options: ["Storing environment-specific configuration and secrets", "Defining CSS styles", "Creating test cases", "Managing dependencies"], correctIndex: 0, explanation: ".env files store environment variables (API keys, database URLs, secrets) that vary between environments and should not be committed to git." },
      { question: "What does res.json() do in Express?", options: ["Parses JSON input", "Sends a JSON response with correct Content-Type header", "Creates a JSON file", "Validates JSON"], correctIndex: 1, explanation: "res.json() serializes the given data to JSON, sets the Content-Type header to application/json, and sends the response." },
      { question: "What is npm?", options: ["Node Process Manager", "Node Package Manager — manages project dependencies", "New Project Maker", "Node Protocol Monitor"], correctIndex: 1, explanation: "npm (Node Package Manager) is the default package manager for Node.js, used to install, share, and manage project dependencies." },
      { question: "What is the Buffer class used for?", options: ["Buffering video", "Handling raw binary data", "Caching responses", "Managing memory leaks"], correctIndex: 1, explanation: "Buffer is used to handle raw binary data directly. It's useful for working with streams, file I/O, and network protocols." },
      { question: "What is the purpose of the 'path' module?", options: ["Creating file paths for URL routing", "Providing utilities for working with file and directory paths", "Managing network paths", "Drawing SVG paths"], correctIndex: 1, explanation: "The path module provides utilities for working with file/directory paths, handling OS-specific separators and path resolution." },
      { question: "How does error handling work in Express?", options: ["Automatic error handling", "Error middleware with (err, req, res, next) signature", "try/catch only", "Logging to console"], correctIndex: 1, explanation: "Express error-handling middleware has four parameters (err, req, res, next). Errors are passed via next(err) and caught by error middleware." },
      { question: "What is the 'fs' module used for?", options: ["Frontend styling", "File system operations (read, write, delete files)", "Form submission", "Function scheduling"], correctIndex: 1, explanation: "The fs module provides functions for interacting with the file system: reading, writing, deleting, and watching files and directories." },
      { question: "What does app.listen() do in Express?", options: ["Listens for keyboard events", "Binds and listens for connections on the specified host and port", "Watches file changes", "Starts a database"], correctIndex: 1, explanation: "app.listen() starts a TCP server listening for connections on the given port. It's the final step in setting up an Express server." },
    ],
  },
  {
    skillName: "sql",
    title: "SQL Database Queries",
    description: "Test your SQL skills including SELECT, JOIN, aggregation, subqueries, and database design.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What does SELECT DISTINCT do?", options: ["Selects the first row", "Returns only unique/non-duplicate rows", "Selects a random row", "Counts distinct values"], correctIndex: 1, explanation: "SELECT DISTINCT removes duplicate rows from the result set, returning only unique combinations of the selected columns." },
      { question: "What is a PRIMARY KEY?", options: ["The first column", "A unique identifier for each row that cannot be NULL", "A foreign reference", "An index type"], correctIndex: 1, explanation: "A PRIMARY KEY uniquely identifies each row in a table. It must be unique and cannot contain NULL values." },
      { question: "What does INNER JOIN return?", options: ["All rows from both tables", "Only rows that have matching values in both tables", "All rows from the left table", "All rows from the right table"], correctIndex: 1, explanation: "INNER JOIN returns only the rows where there is a match in both tables based on the join condition." },
      { question: "What is the difference between WHERE and HAVING?", options: ["No difference", "WHERE filters rows before grouping, HAVING filters groups after aggregation", "HAVING is faster", "WHERE only works with numbers"], correctIndex: 1, explanation: "WHERE filters individual rows before GROUP BY. HAVING filters groups after aggregation, allowing conditions on aggregate functions." },
      { question: "What does GROUP BY do?", options: ["Sorts results", "Groups rows with the same values and allows aggregate functions per group", "Limits results", "Joins tables"], correctIndex: 1, explanation: "GROUP BY groups rows sharing values in specified columns, enabling aggregate calculations (COUNT, SUM, AVG) per group." },
      { question: "What is a FOREIGN KEY?", options: ["A key from another database", "A column that references the primary key of another table", "An encryption key", "A composite key"], correctIndex: 1, explanation: "A FOREIGN KEY is a column that creates a link between two tables by referencing the PRIMARY KEY of another table." },
      { question: "What does LEFT JOIN return?", options: ["Only matching rows", "All rows from the left table and matching rows from the right", "All rows from the right table", "Random rows"], correctIndex: 1, explanation: "LEFT JOIN returns all rows from the left table, with matching rows from the right table. Non-matching right table columns are NULL." },
      { question: "What is a subquery?", options: ["A sub-table", "A query nested inside another query", "A query on a view", "A stored procedure"], correctIndex: 1, explanation: "A subquery is a query embedded within another SQL statement. It can be used in SELECT, WHERE, FROM, or HAVING clauses." },
      { question: "What does the COUNT() function do?", options: ["Counts columns", "Returns the number of rows matching a condition", "Counts tables", "Counts databases"], correctIndex: 1, explanation: "COUNT() returns the number of rows. COUNT(*) counts all rows, COUNT(column) counts non-NULL values in that column." },
      { question: "What is an INDEX used for?", options: ["Displaying row numbers", "Speeding up data retrieval by creating a data structure for quick lookups", "Sorting permanently", "Backing up data"], correctIndex: 1, explanation: "An index creates a data structure (typically B-tree) that speeds up data retrieval but adds overhead to INSERT/UPDATE operations." },
      { question: "What does ORDER BY do?", options: ["Groups results", "Sorts the result set by specified columns (ASC or DESC)", "Filters results", "Limits results"], correctIndex: 1, explanation: "ORDER BY sorts query results by one or more columns in ascending (ASC, default) or descending (DESC) order." },
      { question: "What is normalization?", options: ["Making data normal", "Organizing data to reduce redundancy and improve integrity", "Encrypting data", "Backing up data"], correctIndex: 1, explanation: "Normalization organizes database tables to minimize data redundancy and dependency, typically through a series of normal forms (1NF, 2NF, 3NF)." },
      { question: "What does UNION do?", options: ["Joins tables horizontally", "Combines result sets of two queries vertically, removing duplicates", "Creates a view", "Merges databases"], correctIndex: 1, explanation: "UNION combines the result sets of two SELECT statements, removing duplicates. UNION ALL keeps duplicates." },
      { question: "What is a transaction?", options: ["A payment record", "A sequence of operations executed as a single unit of work (ACID)", "A log entry", "A query plan"], correctIndex: 1, explanation: "A transaction groups multiple operations into an atomic unit. Either all operations succeed (COMMIT) or none do (ROLLBACK), ensuring data consistency." },
      { question: "What does LIMIT/OFFSET do?", options: ["Limits column width", "Restricts the number of rows returned and skips initial rows", "Limits joins", "Sets timeouts"], correctIndex: 1, explanation: "LIMIT restricts how many rows are returned. OFFSET skips a specified number of rows before starting to return results." },
    ],
  },
  {
    skillName: "java",
    title: "Java Programming",
    description: "Assess your Java skills covering OOP, collections, generics, concurrency, and JVM concepts.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the difference between == and .equals() in Java?", options: ["No difference", "== compares references, .equals() compares values", ".equals() is faster", "== only works with primitives"], correctIndex: 1, explanation: "== checks if two references point to the same object. .equals() checks if two objects are logically equal (value comparison)." },
      { question: "What is the purpose of the 'final' keyword?", options: ["Ends the program", "Makes a variable constant, method non-overridable, or class non-inheritable", "Finalizes garbage collection", "Marks the last method"], correctIndex: 1, explanation: "final on a variable makes it constant, on a method prevents overriding, and on a class prevents inheritance." },
      { question: "What is an interface in Java?", options: ["A user interface", "A contract defining methods that implementing classes must provide", "A type of variable", "A debugging tool"], correctIndex: 1, explanation: "An interface defines abstract methods that implementing classes must provide. It enables multiple inheritance of behavior." },
      { question: "What is the difference between ArrayList and LinkedList?", options: ["No difference", "ArrayList uses array (fast random access), LinkedList uses nodes (fast insert/delete)", "LinkedList is always faster", "ArrayList is deprecated"], correctIndex: 1, explanation: "ArrayList stores elements in a resizable array (O(1) access, O(n) insert). LinkedList uses doubly-linked nodes (O(n) access, O(1) insert at known position)." },
      { question: "What is polymorphism?", options: ["Multiple constructors", "The ability of objects to take multiple forms via method overriding/overloading", "Multiple inheritance", "Multiple threads"], correctIndex: 1, explanation: "Polymorphism allows objects to be treated as instances of their parent class. Method calls are resolved at runtime (dynamic dispatch)." },
      { question: "What does the 'static' keyword mean?", options: ["Cannot change", "Belongs to the class rather than any instance", "Runs first", "Is thread-safe"], correctIndex: 1, explanation: "static members belong to the class itself, not to any instance. They can be accessed without creating an object." },
      { question: "What is garbage collection in Java?", options: ["Deleting files", "Automatic memory management that reclaims unused objects", "Removing unused imports", "Clearing the console"], correctIndex: 1, explanation: "The JVM's garbage collector automatically identifies and frees memory occupied by objects that are no longer reachable." },
      { question: "What is an abstract class?", options: ["A class with no methods", "A class that cannot be instantiated and may contain abstract methods", "A private class", "A final class"], correctIndex: 1, explanation: "Abstract classes cannot be instantiated directly. They can have both abstract (unimplemented) and concrete (implemented) methods." },
      { question: "What is a HashMap?", options: ["A sorted map", "A key-value store with O(1) average get/put using hash-based indexing", "A thread-safe map", "A list of maps"], correctIndex: 1, explanation: "HashMap stores key-value pairs using hashing for O(1) average-case lookups. It is not synchronized or ordered." },
      { question: "What is exception handling in Java?", options: ["Ignoring errors", "Using try-catch-finally blocks to handle runtime errors gracefully", "Logging errors", "Preventing compilation errors"], correctIndex: 1, explanation: "Exception handling uses try (code that may throw), catch (handle specific exceptions), and finally (always-execute cleanup) blocks." },
      { question: "What are generics in Java?", options: ["General purpose classes", "Type parameters that enable type-safe code reuse at compile time", "A design pattern", "A collection type"], correctIndex: 1, explanation: "Generics allow classes and methods to work with any type while providing compile-time type safety, e.g., List<String>." },
      { question: "What is the JVM?", options: ["Java Virtual Machine — runtime environment that executes bytecode", "Java Version Manager", "Java Variable Monitor", "Java Visual Modifier"], correctIndex: 0, explanation: "The JVM (Java Virtual Machine) executes Java bytecode, providing platform independence ('write once, run anywhere')." },
      { question: "What is multithreading?", options: ["Running multiple programs", "Executing multiple threads concurrently within a process", "Multiple CPU cores", "Parallel file I/O"], correctIndex: 1, explanation: "Multithreading allows concurrent execution of two or more threads within a single process, sharing the same memory space." },
      { question: "What is encapsulation?", options: ["Wrapping code in a function", "Bundling data and methods together, hiding internal state via access modifiers", "Creating packages", "Compressing code"], correctIndex: 1, explanation: "Encapsulation bundles data (fields) and methods that operate on that data within a class, using access modifiers to control visibility." },
      { question: "What does 'synchronized' do?", options: ["Synchronizes time", "Ensures only one thread can access a block/method at a time", "Syncs databases", "Updates variables"], correctIndex: 1, explanation: "The synchronized keyword ensures mutual exclusion — only one thread can execute the synchronized block/method at a time, preventing race conditions." },
    ],
  },
  {
    skillName: "typescript",
    title: "TypeScript Proficiency",
    description: "Test your TypeScript knowledge including type system, generics, utility types, and advanced patterns.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the main benefit of TypeScript over JavaScript?", options: ["Faster execution", "Static type checking at compile time", "Smaller bundle size", "Better browser support"], correctIndex: 1, explanation: "TypeScript adds static type checking, catching errors at compile time rather than runtime, improving code quality and developer experience." },
      { question: "What is the 'any' type?", options: ["A specific type", "A type that disables type checking for that variable", "An error type", "A number type"], correctIndex: 1, explanation: "The 'any' type opts out of type checking entirely. It accepts any value and disables all type safety for that variable." },
      { question: "What is the difference between 'interface' and 'type'?", options: ["No difference", "Interfaces can be extended/merged, types can use unions/intersections", "Types are faster", "Interfaces are deprecated"], correctIndex: 1, explanation: "Interfaces support declaration merging and extends. Types support unions, intersections, mapped types, and conditional types." },
      { question: "What does the '?' operator do in type definitions?", options: ["Ternary operation", "Makes a property optional", "Null check", "Pattern matching"], correctIndex: 1, explanation: "The ? after a property name makes it optional: { name?: string } means name can be string or undefined." },
      { question: "What is a generic type?", options: ["A general-purpose variable", "A type that takes type parameters for reusable, type-safe code", "A built-in type", "A CSS type"], correctIndex: 1, explanation: "Generics allow functions/classes to work with multiple types while maintaining type safety: function identity<T>(arg: T): T." },
      { question: "What does Partial<T> do?", options: ["Removes some properties", "Makes all properties of T optional", "Makes T partial class", "Splits T in half"], correctIndex: 1, explanation: "Partial<T> constructs a type with all properties of T set to optional. Useful for update operations where not all fields are required." },
      { question: "What is a union type?", options: ["A joined type", "A type that can be one of several types (A | B)", "A merged interface", "A class hierarchy"], correctIndex: 1, explanation: "Union types (A | B) allow a value to be one of several types. TypeScript narrows the type using type guards." },
      { question: "What does 'as const' do?", options: ["Creates a constant", "Makes the value readonly and narrows literal types", "Type assertion", "Declares a class"], correctIndex: 1, explanation: "'as const' creates a readonly type with the most specific literal types, e.g., [1, 2] as const becomes readonly [1, 2]." },
      { question: "What is a type guard?", options: ["A security feature", "A runtime check that narrows a type within a conditional block", "A type wrapper", "An error handler"], correctIndex: 1, explanation: "Type guards are runtime checks (typeof, instanceof, in, custom functions) that narrow a union type to a specific type." },
      { question: "What does Pick<T, K> do?", options: ["Picks a random type", "Creates a type with only the specified keys K from T", "Removes keys", "Picks the first property"], correctIndex: 1, explanation: "Pick<T, K> constructs a type by picking the specified properties K from T, e.g., Pick<User, 'name' | 'email'>." },
      { question: "What is an enum in TypeScript?", options: ["A list of errors", "A set of named constants", "A function type", "An array type"], correctIndex: 1, explanation: "Enums define a set of named constants. They can be numeric (default) or string-based, providing readable, type-safe constants." },
      { question: "What does the 'never' type represent?", options: ["Null value", "A type for values that never occur (unreachable code, always-throwing functions)", "Undefined", "Any value"], correctIndex: 1, explanation: "The 'never' type represents values that never occur: functions that always throw, infinite loops, or exhaustive type narrowing." },
      { question: "What is a mapped type?", options: ["A type with a map", "A type that transforms properties of another type using iteration", "A Map collection type", "A geographic type"], correctIndex: 1, explanation: "Mapped types iterate over keys of a type to create new types: { [K in keyof T]: boolean } converts all properties to boolean." },
      { question: "What does Omit<T, K> do?", options: ["Omits the type entirely", "Creates a type with all properties of T except those in K", "Makes K optional", "Removes null types"], correctIndex: 1, explanation: "Omit<T, K> constructs a type by removing the specified keys K from T, the opposite of Pick." },
      { question: "What is declaration merging?", options: ["Merging files", "TypeScript combining multiple declarations of the same name into one", "Combining two variables", "Concatenating strings"], correctIndex: 1, explanation: "Declaration merging combines multiple declarations with the same name into a single definition. Interfaces support this; type aliases do not." },
    ],
  },
  {
    skillName: "html-css",
    title: "HTML & CSS Fundamentals",
    description: "Test your HTML and CSS skills including semantics, layout, Flexbox, Grid, and responsive design.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the purpose of semantic HTML?", options: ["Better styling", "Giving meaning to content for accessibility and SEO", "Faster rendering", "Smaller file size"], correctIndex: 1, explanation: "Semantic HTML (<article>, <nav>, <header>) conveys meaning about the content, improving accessibility, SEO, and code readability." },
      { question: "What is the CSS box model?", options: ["A 3D rendering model", "Content + padding + border + margin around every element", "A layout algorithm", "A responsive design technique"], correctIndex: 1, explanation: "The box model defines every element as a box with content, padding (inside border), border, and margin (outside border)." },
      { question: "What does 'display: flex' do?", options: ["Makes element flexible in size", "Creates a flex container enabling flexible layout of child items", "Hides the element", "Makes text flexible"], correctIndex: 1, explanation: "display: flex creates a flex container, enabling powerful layout capabilities for arranging child items along a single axis." },
      { question: "What is the difference between 'em' and 'rem' units?", options: ["No difference", "em is relative to parent font-size, rem is relative to root font-size", "rem is larger", "em is deprecated"], correctIndex: 1, explanation: "em is relative to the parent element's font-size (compounds). rem is relative to the root (<html>) font-size (consistent)." },
      { question: "What does 'position: absolute' do?", options: ["Positions at the top of the page", "Removes from flow and positions relative to the nearest positioned ancestor", "Fixes to the viewport", "Centers the element"], correctIndex: 1, explanation: "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with position other than static." },
      { question: "What is CSS Grid?", options: ["A table layout", "A two-dimensional layout system for rows and columns", "A flexbox variant", "A framework"], correctIndex: 1, explanation: "CSS Grid is a two-dimensional layout system that can handle both rows and columns simultaneously, unlike Flexbox which is one-dimensional." },
      { question: "What does 'z-index' control?", options: ["Zoom level", "The stacking order of overlapping positioned elements", "Element width", "Font size"], correctIndex: 1, explanation: "z-index controls which positioned element appears in front when elements overlap. Higher z-index values appear on top." },
      { question: "What is a media query?", options: ["A database query", "A CSS technique to apply styles based on device/viewport characteristics", "An API call", "A JavaScript event"], correctIndex: 1, explanation: "Media queries apply CSS rules conditionally based on viewport width, device type, orientation, etc., enabling responsive design." },
      { question: "What does 'box-sizing: border-box' do?", options: ["Adds a border", "Includes padding and border in the element's total width/height", "Creates a box shadow", "Sets box color"], correctIndex: 1, explanation: "border-box includes padding and border in the element's specified width/height, making layout calculations more intuitive." },
      { question: "What is specificity in CSS?", options: ["How specific a selector is", "The algorithm determining which CSS rule applies when multiple rules match", "The order of CSS files", "The importance of a property"], correctIndex: 1, explanation: "Specificity determines which CSS rule wins when multiple rules target the same element. Inline > ID > Class > Element selectors." },
      { question: "What does the <meta viewport> tag do?", options: ["Creates a viewport", "Controls how the page scales and displays on mobile devices", "Adds metadata", "Enables JavaScript"], correctIndex: 1, explanation: "The viewport meta tag controls the page's dimensions and scaling on mobile devices, essential for responsive design." },
      { question: "What is Flexbox's 'justify-content' property?", options: ["Justifies text", "Aligns flex items along the main axis", "Sets content width", "Creates space between paragraphs"], correctIndex: 1, explanation: "justify-content aligns flex items along the main axis (horizontal by default): flex-start, center, space-between, space-around, etc." },
      { question: "What is the difference between 'display: none' and 'visibility: hidden'?", options: ["No difference", "display:none removes from layout, visibility:hidden hides but keeps space", "visibility:hidden is animated", "display:none is slower"], correctIndex: 1, explanation: "display:none removes the element from the document flow entirely. visibility:hidden hides it visually but the element still occupies space." },
      { question: "What are CSS custom properties (variables)?", options: ["JavaScript variables in CSS", "Reusable values defined with -- prefix, accessed with var()", "Preprocessor variables", "Browser settings"], correctIndex: 1, explanation: "CSS custom properties (--name: value) are reusable values accessed via var(--name). They cascade and can be updated dynamically." },
      { question: "What does 'overflow: hidden' do?", options: ["Hides the element", "Clips content that overflows the element's box", "Prevents scrolling globally", "Hides scroll bars only"], correctIndex: 1, explanation: "overflow: hidden clips any content that extends beyond the element's padding box. No scrollbar is provided." },
    ],
  },
  {
    skillName: "git",
    title: "Git Version Control",
    description: "Test your Git knowledge including branching, merging, rebasing, and collaborative workflows.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1500,
    passThreshold: 70,
    questions: [
      { question: "What does 'git clone' do?", options: ["Creates a backup", "Creates a local copy of a remote repository", "Copies a file", "Creates a new branch"], correctIndex: 1, explanation: "git clone creates a complete local copy of a remote repository, including all branches, commits, and history." },
      { question: "What is the difference between 'git merge' and 'git rebase'?", options: ["No difference", "Merge creates a merge commit, rebase replays commits on top of another branch", "Rebase is safer", "Merge is faster"], correctIndex: 1, explanation: "Merge creates a merge commit preserving history. Rebase rewrites history by replaying commits on top of another branch, creating a linear history." },
      { question: "What does 'git stash' do?", options: ["Deletes changes", "Temporarily saves uncommitted changes for later retrieval", "Creates a commit", "Switches branches"], correctIndex: 1, explanation: "git stash saves uncommitted changes (staged and unstaged) to a stack and reverts the working directory to HEAD, allowing you to switch contexts." },
      { question: "What is a branch in Git?", options: ["A copy of the repository", "A lightweight movable pointer to a commit", "A separate folder", "A backup"], correctIndex: 1, explanation: "A branch is a lightweight pointer to a specific commit. Creating branches is cheap — it just creates a new pointer." },
      { question: "What does 'git pull' do?", options: ["Pushes code", "Fetches from remote and merges into the current branch", "Pulls a file", "Creates a pull request"], correctIndex: 1, explanation: "git pull is a combination of git fetch (download remote changes) and git merge (integrate them into your current branch)." },
      { question: "What is the staging area (index)?", options: ["A testing environment", "An intermediate area where changes are prepared before committing", "The remote server", "The working directory"], correctIndex: 1, explanation: "The staging area (index) holds changes that will be included in the next commit. git add moves changes from working directory to staging." },
      { question: "What does 'git reset --soft HEAD~1' do?", options: ["Deletes the last commit permanently", "Undoes the last commit but keeps changes staged", "Resets the entire repo", "Moves to a different branch"], correctIndex: 1, explanation: "--soft moves HEAD back one commit but keeps all changes in the staging area, allowing you to recommit differently." },
      { question: "What is a pull request?", options: ["A git command", "A request to merge changes from one branch into another (on platforms like GitHub)", "A way to pull code", "A merge conflict"], correctIndex: 1, explanation: "A pull request (GitHub/GitLab) is a proposal to merge changes, enabling code review, discussion, and CI checks before merging." },
      { question: "What does 'git cherry-pick' do?", options: ["Picks the best commit", "Applies a specific commit from one branch onto another", "Selects files to stage", "Picks a merge strategy"], correctIndex: 1, explanation: "git cherry-pick applies the changes from a specific commit onto the current branch, creating a new commit." },
      { question: "What is a merge conflict?", options: ["An error in git", "When git cannot automatically resolve differences between two branches", "A deleted branch", "A corrupted repository"], correctIndex: 1, explanation: "Merge conflicts occur when the same lines are modified differently in two branches being merged. They must be resolved manually." },
      { question: "What does '.gitignore' do?", options: ["Ignores git commands", "Specifies files and patterns that git should not track", "Hides the .git folder", "Ignores merge conflicts"], correctIndex: 1, explanation: ".gitignore specifies file patterns that git should not track. Common entries: node_modules/, .env, dist/, *.log." },
      { question: "What is 'git log' used for?", options: ["Logging errors", "Viewing the commit history of the repository", "Creating log files", "Monitoring performance"], correctIndex: 1, explanation: "git log shows the commit history: commit hashes, authors, dates, and messages. Use flags like --oneline, --graph for different views." },
      { question: "What does 'git fetch' do?", options: ["Fetches and merges", "Downloads objects and refs from remote without merging", "Fetches a single file", "Creates a branch"], correctIndex: 1, explanation: "git fetch downloads new data from the remote repository but does NOT merge or modify your working directory. Use git pull to also merge." },
      { question: "What is HEAD in Git?", options: ["The first commit", "A pointer to the current commit/branch you're on", "The main branch", "The latest tag"], correctIndex: 1, explanation: "HEAD is a pointer to the current commit you're working on. It usually points to the tip of the current branch." },
      { question: "What does 'git diff' show?", options: ["Differences between repositories", "Line-by-line changes between working directory, staging, and commits", "Different branches", "File permissions"], correctIndex: 1, explanation: "git diff shows the differences between the working directory and the staging area. git diff --staged shows staged vs last commit." },
    ],
  },
  {
    skillName: "data-structures",
    title: "Data Structures & Algorithms",
    description: "Test your knowledge of fundamental data structures and their time complexities.",
    difficulty: "INTERMEDIATE",
    timeLimitSecs: 1800,
    passThreshold: 70,
    questions: [
      { question: "What is the time complexity of accessing an element in an array by index?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], correctIndex: 1, explanation: "Array access by index is O(1) because arrays use contiguous memory, allowing direct calculation of the element's memory address." },
      { question: "What data structure uses FIFO (First In, First Out)?", options: ["Stack", "Queue", "Tree", "Graph"], correctIndex: 1, explanation: "A Queue follows FIFO — elements are added at the rear (enqueue) and removed from the front (dequeue)." },
      { question: "What is the worst-case time complexity of binary search?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], correctIndex: 1, explanation: "Binary search halves the search space each step on a sorted array, giving O(log n) worst-case time complexity." },
      { question: "What is a hash table's average-case lookup time?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], correctIndex: 1, explanation: "Hash tables provide O(1) average-case lookups by using a hash function to compute the index directly. Worst case is O(n) with collisions." },
      { question: "What data structure uses LIFO (Last In, First Out)?", options: ["Queue", "Stack", "Linked List", "Heap"], correctIndex: 1, explanation: "A Stack follows LIFO — the last element pushed is the first to be popped. Used in function calls, undo operations, and DFS." },
      { question: "What is a binary search tree (BST)?", options: ["A tree with exactly two nodes", "A tree where left children are smaller and right children are larger than the parent", "A balanced tree", "A graph with two edges"], correctIndex: 1, explanation: "In a BST, for each node: all left subtree values are smaller, and all right subtree values are larger. This enables efficient search." },
      { question: "What is the time complexity of inserting at the beginning of a linked list?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], correctIndex: 1, explanation: "Inserting at the head of a linked list is O(1) — just create a new node and update the head pointer. No shifting needed." },
      { question: "What is a heap used for?", options: ["Memory allocation", "Efficiently finding the min or max element", "Storing key-value pairs", "Graph traversal"], correctIndex: 1, explanation: "A heap is a complete binary tree where the root is the min (min-heap) or max (max-heap). Extract min/max is O(log n), peek is O(1)." },
      { question: "What is the time complexity of quicksort on average?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], correctIndex: 1, explanation: "Quicksort averages O(n log n) by partitioning the array around a pivot. Worst case is O(n^2) with poor pivot selection." },
      { question: "What is a graph?", options: ["A chart", "A collection of nodes (vertices) connected by edges", "A sorted list", "A type of tree"], correctIndex: 1, explanation: "A graph consists of vertices (nodes) and edges (connections). Graphs can be directed/undirected, weighted/unweighted." },
      { question: "What is the difference between BFS and DFS?", options: ["BFS is faster", "BFS explores level-by-level (queue), DFS explores depth-first (stack/recursion)", "DFS uses more memory", "No difference"], correctIndex: 1, explanation: "BFS uses a queue to explore neighbors first (level-by-level). DFS uses a stack/recursion to explore as deep as possible before backtracking." },
      { question: "What is dynamic programming?", options: ["Programming dynamically typed languages", "Solving problems by breaking into overlapping subproblems and caching results", "Real-time programming", "Object-oriented programming"], correctIndex: 1, explanation: "Dynamic programming solves optimization problems by breaking them into overlapping subproblems, storing results to avoid redundant computation." },
      { question: "What is the space complexity of merge sort?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correctIndex: 1, explanation: "Merge sort requires O(n) additional space for the temporary arrays used during merging, making it not in-place." },
      { question: "What is a trie?", options: ["A type of tree for trying things", "A tree-like structure for efficient prefix-based string searching", "A balanced BST", "A sorting algorithm"], correctIndex: 1, explanation: "A trie (prefix tree) stores strings character by character. Each path from root to a node represents a prefix, enabling O(m) lookup where m is string length." },
      { question: "What is the amortized time complexity of appending to a dynamic array?", options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], correctIndex: 1, explanation: "Dynamic arrays (like ArrayList) have O(1) amortized append. Occasionally resizing costs O(n), but spread across all operations it averages O(1)." },
    ],
  },
];

async function seedSkillTests() {
  console.log("Seeding skill verification tests...\n");

  for (const testData of tests) {
    const test = await prisma.skillTest.upsert({
      where: {
        skillName_difficulty: {
          skillName: testData.skillName,
          difficulty: testData.difficulty,
        },
      },
      update: {
        title: testData.title,
        description: testData.description,
        timeLimitSecs: testData.timeLimitSecs,
        passThreshold: testData.passThreshold,
      },
      create: {
        skillName: testData.skillName,
        title: testData.title,
        description: testData.description,
        difficulty: testData.difficulty,
        timeLimitSecs: testData.timeLimitSecs,
        passThreshold: testData.passThreshold,
      },
    });

    // Replace questions (delete existing, create fresh)
    await prisma.skillTestQuestion.deleteMany({ where: { testId: test.id } });
    await prisma.skillTestQuestion.createMany({
      data: testData.questions.map((q, i) => ({
        testId: test.id,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        orderIndex: i,
      })),
    });

    console.log(
      `  ${test.skillName} (${test.difficulty}) — ${testData.questions.length} questions`
    );
  }

  console.log(`\nSeeded ${tests.length} skill tests successfully!`);
}

seedSkillTests()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
