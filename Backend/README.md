## Backend

Backend project for Authentication Web Application.

## Features

- User registration
- User login
- JWT authentication
- Auth status validation
- Password hashing with bcrypt
- User login metrics tracking
- MySQL database integration

## 🔧 Development server

To start the development server, run:

```bash
npm install
npm run dev
```

To compile typescript

```bash
npm run build
```

To run compiled project

```bash
npm start
```

The server will start on:

```bash
http://localhost:300
```

## Enviroment variables

Create a new .env file in the root of the project

```bash

JWT_SECRET=your_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=authdb
DB_PROVIDER=mysql or json
```

## Database setup

Create the database:

```bash
CREATE DATABASE authdb;
```

Create the required tables:

```bash
CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```
