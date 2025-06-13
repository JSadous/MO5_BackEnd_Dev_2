# MO5_BackEnd_Dev_2

### What is a Unit Test?

A **unit test** is a type of software test that checks the correctness of individual functions or components in isolation.  
Its main purpose is to:

- Catch bugs early in development  
- Ensure existing code continues to work after changes  
- Improve overall code reliability and maintainability

Unit tests are essential for building robust, testable, and scalable applications.

### What is Mocha.js?

**Mocha.js** is a JavaScript testing framework that runs on Node.js and in the browser.  
It provides a structured way to write and organize test cases using a BDD (Behavior Driven Development) or TDD (Test Driven Development) style.

Mocha is known for its flexibility and supports asynchronous testing, test suites, and hooks for setup and teardown.

---

### What is Chai?

**Chai** is an assertion library for Node.js and browsers that pairs well with Mocha.  
It allows developers to write readable and expressive tests using different assertion styles like:

- Assert
- Expect
- Should

Chai helps validate the output of your code and ensure that it behaves as expected.

---

### What is Sinon.js?

**Sinon.js** is a standalone library for test spies, stubs, and mocks.  
It is used to:

- Spy on function calls and arguments  
- Stub out dependencies or functions  
- Mock behavior to isolate units of code

Sinon is especially useful for testing functions that rely on timers, network requests, or other side effects.