```markdown
# Task Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

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
   git clone https://github.com/your-username/task-management-system.git
   cd task-management-system
   ```

2. **Install dependencies:**
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd backend
     npm install
     ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory with the following content:
     ```
     MONGODB_URI=your_mongodb_connection_string
     PORT=3002
     ```

## Running the Application
1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to view the application.

## Folder Structure
```
task-management-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── ...
│   ├── public/
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

## API Endpoints
- **GET /api/get_all_tasks**: Retrieves all tasks.
- **POST /api/create_task**: Creates a new task.
- **PUT /api/update_task/:id**: Updates an existing task.
- **DELETE /api/delete_task/:id**: Deletes a task by ID.

## Usage
- **Creating a Task:** Use the form on the main page to add a new task.
- **Updating a Task:** Click on a task to open the update popup and modify the task details.
- **Deleting a Task:** Click the delete button next to a task to remove it.
- **Viewing Statistics:** The dashboard displays various statistics about the tasks.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```