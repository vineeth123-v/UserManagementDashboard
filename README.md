User Management Application
Overview
A simple web application to manage user details. The app allows users to:

View a list of users
Add new users
Edit existing user details
Delete users
The application interacts with a mock backend API provided by JSONPlaceholder.

Features
View Users: Fetch and display a list of users with their ID, name, email, and department.
Add User: Add new users to the list via a simple form.
Edit User: Modify the details of existing users.
Delete User: Remove users from the list.
Error Handling: Handle API failures gracefully with user-friendly error messages.
Responsive Design: User interface adapts to different screen sizes.
Client-side Validation: Ensures required fields are filled before submission.
Project Structure
scss
Copy
Edit
src/
├── components/
│   ├── UserList.js      // Displays user list with edit/delete options
│   ├── UserForm.js      // Handles adding/editing user details
├── App.js               // Main app component
├── index.js             // Entry point of the app
├── index.css            // Global styles
Setup Instructions
Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
This will run the application locally at http://localhost:3000.

API Details
The app uses the following endpoints from JSONPlaceholder:

GET /users: Fetch all users.
POST /users: Simulate adding a new user.
PUT /users/:id: Simulate updating user details.
DELETE /users/:id: Simulate deleting a user.
Note: Since JSONPlaceholder is a mock API, any changes (add, edit, delete) will not persist across requests.

Challenges
API Limitations: The mock API doesn’t save changes, requiring state management to simulate actions locally.
Validation: Ensured minimal client-side validation for required fields like Name and Email.
Error Handling: Added try-catch blocks around API calls to handle failures gracefully.
Future Improvements
Enhanced Validation: Add more robust checks (e.g., email validation regex, department selection).
Persist Data: Integrate a real backend or database for persistent data.
Pagination: Implement client-side pagination to handle larger datasets.
License
This project is open-source and available under the MIT License.

