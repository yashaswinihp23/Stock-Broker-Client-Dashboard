# Stock Broker Client Dashboard

A full-stack application with Spring Boot backend and React frontend for user authentication and real-time messaging.

## Features

- User registration and login with JWT authentication
- Real-time messaging using WebSockets (STOMP)
- Responsive React frontend with Vite

## Prerequisites

- Java 17 or higher
- Maven
- Node.js and npm
- MySQL database

## Setup

### Backend

1. Navigate to the backend directory:
   ```
   cd Stock-Broker-Client-Dashboard/backend
   ```

2. Update `src/main/resources/application.properties` with your MySQL database credentials:
   ```
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
   jwt.secret=your_jwt_secret_key_here
   ```

3. Run the backend:
   ```
   mvn spring-boot:run
   ```

### Frontend

1. Navigate to the frontend directory:
   ```
   cd Stock-Broker-Client-Dashboard/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the frontend:
   ```
   npm run dev
   ```

## Usage

- Register a new user or login with existing credentials.
- Access the dashboard for real-time messaging.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/user` - Get current user info (requires JWT)
- WebSocket: `ws://localhost:8080/ws` - Real-time messaging

## Technologies Used

- Backend: Spring Boot, Spring Security, JWT, Spring WebSockets, MySQL, JPA
- Frontend: React, Vite, Axios, SockJS, STOMP.js
