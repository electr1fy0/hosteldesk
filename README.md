# HostelDesk

A full-stack application for managing and tracking hostel infrastructure issues.

## Features

User registration and login. JWT-based authentication.
Create and list issues.

## Tech Stack

Frontend: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
Backend: Go, pgx
Database: PostgreSQL

## Getting Started

### Prerequisites

Go, Node.js, PostgreSQL.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/hosteldesk.git
    cd hosteldesk
    ```

2.  Backend Setup:
    -   Navigate to the `backend` directory: `cd backend`
    -   Install Go dependencies: `go mod tidy`
    -   Configure your PostgreSQL connection string in `main.go`.
    -   Run the backend server: `go run main.go`

3.  Frontend Setup:
    -   Navigate to the project root directory.
    -   Install Node.js dependencies: `npm install`
    -   Run the frontend development server: `npm run dev`

The application should now be running on `http://localhost:5173`.
