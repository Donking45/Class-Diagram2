## Briefly discuss where you use Abstraction and give reasons for your decision.
The User class defines abstract methods login and logout with no implementation. The derived classes (Intern, Administrator, and Tutor) are then required to provide their own implementations for these methods. 
The decision to incorporate abstraction is to define a common interface for various user types while allowing each specific user type to implement its own behavior. Some of the reasons are:

# Common Interface:
- Abstraction in the User class defines abstract methods like login and logout without providing concrete implementations.This establishes a common interface that all derived classes must adhere to, ensuring a consistent set of methods across different user types.

# Enforced Contract:
- By declaring abstract methods in the base class, you create a contract that derived classes must fulfill. This contract defines the expected behavior for certain actions (e.g login and logout) without specifying how each class achieves it. This approach enforces a clear understanding of what methods must be implemented by derived classes.

# Flexibility and Customization:
- Abstraction allows each derived class (e.g., Intern, Administrator, Tutor) to provide its own unique implementation for methods like login and logout. This flexibilty enables customization based on the specific requirements and responsibilities of each user type.

# Scalability and Extensibility:
- Abstraction facilitates the addition of new user types without altering the existing codebase significantly. Each new class can extend the User class and provide its own implementation of abstract methods, contributing to a scalable and extensible architecture.