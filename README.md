# ValidateMe - JWT Based Authentication

ValidateMe is a secure authentication system that uses JWT (JSON Web Tokens) to manage user sessions. The system supports user registration, login, and protected content access using JWT tokens. It also ensures password security by hashing passwords with bcrypt.

## Features

- User Registration
- User Login
- JWT-based Authentication
- Protected Routes
- Password Hashing with bcrypt
- Logout Functionality

## Prerequisites

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ItsJupiter000/validateMe.git
    cd validateMe
    ```

2. **Install dependencies:**

    ```bash
    npm install bcryptjs body-parser cookie-parser cors dotenv express jsonwebtoken mongoose
    ```
    
3. **Set up your environment variables:**

    Create a `.env` file in the root directory and add your MongoDB URI, port, and JWT secret:

    ```plaintext
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdatabase
    PORT=8000
    TOKEN_SECRET=yourjwtsecret
    ```

4. **Start the server:**

    ```bash
    node server.js
    ```

    Your server should now be running on `http://localhost:8000`.


## Project Structure

![Screenshot from 2024-06-09 17-54-55](https://github.com/ItsJupiter000/validateMe/assets/120741895/d19c039a-9ae0-4689-ba1f-bd1622d3b3ab)


## Usage

### Home page

1. Open `index.html` in your browser.
2. choose desirable action.

![Screenshot from 2024-06-09 17-19-53](https://github.com/ItsJupiter000/validateMe/assets/120741895/bfc54792-1319-44e2-87dc-8290086e638d)


### Register a New User

1. Open `signup.html` in your browser.
2. Fill in the required details and submit the form.

![Screenshot from 2024-06-09 17-20-16](https://github.com/ItsJupiter000/validateMe/assets/120741895/110fb179-63f5-4a82-8acb-712a1a90e78a)


![Screenshot from 2024-06-09 17-47-20](https://github.com/ItsJupiter000/validateMe/assets/120741895/cc79fd2f-db03-4efa-a011-d7158c0bee1d)


### Log In

1. Open `login.html` in your browser.
2. Enter your registered email and password and submit the form.

![Screenshot from 2024-06-09 17-21-13](https://github.com/ItsJupiter000/validateMe/assets/120741895/99e62f84-35ba-4804-ba72-466bd9c72506)


![Screenshot from 2024-06-09 17-22-31](https://github.com/ItsJupiter000/validateMe/assets/120741895/492264da-88a7-41bb-bc0d-7799a0c3380a)


### Log In with JWT Token

1. Open `jwtlogin.html` in your browser.
2. Enter your JWT token and submit the form.

![Screenshot from 2024-06-09 17-23-07](https://github.com/ItsJupiter000/validateMe/assets/120741895/d82dbe20-7ac7-456c-b474-08cef3757033)

![Screenshot from 2024-06-09 17-23-35](https://github.com/ItsJupiter000/validateMe/assets/120741895/a505ef11-c99c-4ee8-9571-b7d755dd3310)


### Access Protected Content

1. After logging in, you will be redirected to `content.html`.
2. This page can only be accessed if you are logged in.

![Screenshot from 2024-06-09 17-21-35](https://github.com/ItsJupiter000/validateMe/assets/120741895/774c5565-3e26-4c72-9d67-ee14c0647ec9)


### Log Out

1. Click the "Logout" button on the `content.html` page to log out.

![Screenshot from 2024-06-09 17-21-47](https://github.com/ItsJupiter000/validateMe/assets/120741895/1566e3e8-4b38-4d7e-8607-4643def14735)


## Use Cases

1. **Secure User Authentication:** ValidateMe provides a secure authentication system using JWT (JSON Web Tokens) to manage user sessions, ensuring robust user authentication for various applications.

2. **User Registration:** ValidateMe allows users to register for accounts, capturing essential user details such as username, email, and password, ensuring seamless onboarding experiences.

3. **Protected Routes:** With ValidateMe, developers can easily implement protected routes in their applications, allowing access to authenticated users only, enhancing application security.

4. **Password Security:** ValidateMe ensures password security by employing bcrypt for password hashing, safeguarding user credentials against unauthorized access and potential security breaches.

## Acknowledgements

- Thanks to the open-source community for their contributions to libraries and frameworks used in this project.
- Special thanks to Hitesh Chaudhary and Piyush Garg for their insightful YouTube channels, which provided valuable knowledge and inspiration for this project.
