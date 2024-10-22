
# Retail Space Rental Application

## Project Overview

The Retail Space Rental application is a web-based platform designed to facilitate the renting of retail spaces. This project provides an intuitive interface for users to submit inquiries about available retail spaces and manage their rental needs. Built using the MERN (MongoDB, Express, React, Node.js) stack, this application allows for dynamic interactions, user authentication, and efficient data management through a PostgreSQL database.

### Features

- **User Registration & Authentication**: Users can create accounts and log in securely to manage their inquiries and rental spaces.
- **Inquiry Submission**: Users can submit inquiries for specific retail spaces with details like client name, contact information, and the retail space ID.
- **CRUD Operations for Retail Spaces**: Administrators can create, read, update, and delete retail space listings.
- **User-Friendly Interface**: A responsive and modern design using React and Tailwind CSS ensures an enjoyable user experience.
- **Protected Routes**: Users must be authenticated to access specific features, enhancing security.

## Technology Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, Prisma
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Version Control**: Git and GitHub

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **PostgreSQL** installed and running. You can download it from [postgresql.org](https://www.postgresql.org/download/).
- **Git** installed for version control. You can download it from [git-scm.com](https://git-scm.com/downloads).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/h-sharafaldain/courseWork.git
   cd courseWork


2. **Set up the Backend**:

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Install the required dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the `backend` directory with the following content:

     ```plaintext
     POSTGRES_PRISMA_URL=your_postgres_connection_string
     POSTGRES_URL_NON_POOLING=your_postgres_connection_string
     JWT_SECRET=your_jwt_secret
     ```

   - Run the database migrations:

     ```bash
     npx prisma migrate dev
     ```

   - Seed the database with initial data:

     ```bash
     node prisma/seed.js
     ```

   - Start the backend server:

     ```bash
     npm run dev
     ```

3. **Set up the Frontend**:

   - Navigate to the frontend directory:

     ```bash
     cd ../frontend
     ```

   - Install the required dependencies:

     ```bash
     npm install
     ```

   - Start the frontend development server:

     ```bash
     npm run dev
     ```

4. **Access the Application**:

   Open your browser and go to `http://localhost:5173` to access the Retail Space Rental application.

## Usage

- **Register a New User**: Navigate to the register page to create a new account.
- **Log In**: After registration, log in to access your dashboard.
- **Submit Inquiry**: Use the inquiry form to submit requests for available retail spaces.
- **View Inquiries**: Check your submitted inquiries and manage them as needed.

## Contributing

Contributions are welcome! Please follow these steps if you want to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Prisma](https://www.prisma.io/) for providing an excellent ORM for database management.
- [React](https://reactjs.org/) for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) for a utility-first CSS framework.
- [PostgreSQL](https://www.postgresql.org/) for a powerful relational database.

---

Thank you for checking out the Retail Space Rental application!
```

### Summary

This `README.md` provides a detailed overview of your project, from the technology stack and installation steps to usage instructions and contribution guidelines. You can adjust specific details to better fit your project as needed. If you have any other requests or questions, let me know!
