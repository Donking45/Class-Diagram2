// Base class for users
class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    // Abstract method for login
    login() {
      throw new Error('Login method must be implemented by derived class.');
    }
  
    // Abstract method for logout
    logout() {
      throw new Error('Logout method must be implemented by derived class.');
    }
  }
  
  // Derived class for interns
  class Intern extends User {
    constructor(name, email, password) {
      super(name, email, password);
      this.role = 'Intern';
      this.profile = {};
      this.course = []; // Initialize course as an empty array
      this.learningCommunities = [];
    }
  
    // Implementing abstract method for login
    login() {
      console.log(`${this.name} logged in as an intern.`);
    }
  
    // Implementing abstract method for logout
    logout() {
      console.log(`${this.name} logged out as an intern.`);
    }
  }


// Derived class for administrators
class Administrator extends User {
    constructor(name, email) {
      super(name, email);
      this.role = 'Administrator';
    }
  
    // Implementing abstract method for login
    login() {
      console.log(`${this.name} logged in as an administrator.`);
    }
  
    // Implementing abstract method for logout
    logout() {
      console.log(`${this.name} logged out as an administrator.`);
    }
  }
  
  // Derived class for tutors
  class Tutor extends User {
    constructor(name, email) {
      super(name, email);
      this.role = 'Tutor';
      this.lectureContents = [];
      this.resources = [];
    }
  
    // Implementing abstract method for login
    login() {
      console.log(`${this.name} logged in as a tutor.`);
    }
  
    // Implementing abstract method for logout
    logout() {
      console.log(`${this.name} logged out as a tutor.`);
    }
} 
