# AuthWebApp
Authentication Web Application for Angular Academy 2025

# Frontend

Frontend project for Authentication Web Application. It includes Login, Register and Dashboard pages.

## Development server

To start a local development server, run:

```bash
ng serve -o
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


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