# To-Do List Web Application

This is a simple web application for managing your to-do list. You can add tasks, mark them as completed, undo completed tasks, and delete tasks. This README provides an overview of the code structure, usage, and dependencies.

## Table of Contents
- [Features] (#features)
- [Express Server] (#express-server)
    - [API Endpoints] (#api-endpoints)
- [Getting Started] (#gettting-started)
    - [Installation] (#installation)
    - [Usage] (#usage)
- [Dependencies] (#dependencies)
- [Contributing] (#contributing)
- [License] (#license)

## Features
- **To Do List Tracking** Easily add and remove tasks, mark as completed, or reopen tasks.
- **RESTful APIs** Implemented RESTful APIs.
- **Responsive Design** Access from various devices.

## Express Server
The Express server handles the backend functionality of the web application. It provides API endpoints for creating, reading, updating, and deleting tasks. The server is defined in the following file:
- **server.js**: The Express server configuration and API endpoints.

### API Endpoints
- **GET /**: Renders the web page with open and completed tasks.
- **GET /task**: Retrieves all tasks as JSON data.
- **GET /task/:id**: Retrieves a specific task by ID as JSON data.
- **POST /task**: Creates a new task.
- **PUT /task/:id**: Updates an existing task.
- **PATCH /task/:id**: Toggles the completion status of a task.
- **DELETE /task/:id**: Deletes a task.

## Getting Started
To run To-Do-List locally, follow these steps:

### Installation
1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/yongchenwang/pocket-book.git

2. Install the project dependencies using npm (as shown above).

3. Start the Express server:
    ```bash
    node app.js

4. Access the web application in your browser at http://localhost:8000.

### Usage
- Adding tasks: When the "Add" button is clicked, it sends a POST request to create a new task.
- Deleting tasks: Clicking the "Delete" button sends a DELETE request to remove a task.
- Marking tasks as completed: Clicking the "Mark as completed".
- Reopening tasks: Clicking "Undone" button.

## Dependencies
- [Node.js](https://nodejs.org/) - JavaScript runtime environment.
- [Express.js](https://expressjs.com/) - Web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/) - NoSQL database for data storage.
- [Mustache](https://mustache.github.io/) - Logic-less template syntax for rendering HTML templates.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
- [Moment.js](https://momentjs.com/) - JavaScript date library for parsing and formatting dates.
- [Shortid](https://github.com/dylang/shortid) - Generate short, non-sequential, URL-friendly unique IDs.
