# Task Management System

## Introduction
This Task Management System is a web application designed to help users manage their tasks effectively. The system includes features such as task creation, updating, deleting, and viewing statistics.

## Features
- Create, update, and delete tasks
- View tasks with different priorities
- Mark tasks as completed
- View task statistics and visual charts
- Responsive UI with Chakra UI
- Error handling for connection issues

## Technologies Used
- **Frontend:**
  - React
  - TypeScript
  - Chakra UI
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
- **Tools:**
  - Axios for API requests
  - Vite for frontend build tool
  - Chakra UI for styling

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/samehel/task-manager.git
   cd task-manager
   ```

2. **Install dependencies:**
   - Frontend:
     ```bash
     npm install
     ```

3. **Set up environment variables:**
   - Create a `.env` file in the main directory with the following content:
     ```
      VITE_DB_HOST=localhost
      VITE_DB_PORT=27017
      VITE_DB_NAME=task-manager
      VITE_SERVER_PORT=3002
     ```

## Running the Application
1. **Start the backend server:**
   ```bash
   npm run start-server
   ```

2. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to view the application.

## API Endpoints
- **GET /api/get_all_tasks**: Retrieves all tasks.
- **POST /api/create_task**: Creates a new task.
- **PUT /api/update_task/:id**: Updates an existing task.
- **DELETE /api/delete_task/:id**: Deletes a task by ID.

## Usage
- **Creating a Task:** Use the form on the main page (displayed after clicking the '+' button) to add a new task.
- **Updating a Task:** Click on edit icon next to a task to open the update popup and modify the task details.
- **Deleting a Task:** Click the delete button next to a task to remove it.
- **Viewing a Task:** Click on any task to view it in detail
- **Viewing Statistics:** The dashboard displays various statistics about the tasks.
