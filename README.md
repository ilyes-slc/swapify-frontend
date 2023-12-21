# Swapify - Frontend

Welcome to Swapify, a React project that revolutionizes the way people exchange their products by implementing a swipe-based interface, similar to Tinder. With Swapify, you can effortlessly discover and swap products with other users in a fun and interactive manner.

## Features

- **Swipe Interface:** Enjoy a Tinder-like swiping experience to discover and choose products.
- **Product Listings:** Browse through a diverse range of products available for exchange.
- **Matching Algorithm:** Our intelligent matching algorithm connects you with users interested in your products.
- **JWT Authentication:** Securely authenticate and authorize users using JSON Web Tokens (JWT).

## JWT Authentication

Swapify uses JWT authentication to ensure a secure and seamless user experience. Follow these steps to set up authentication:

1. **Generate JWT Secret:**
    - Create a `.env` file in the project root.
    - Add a secure JWT secret to the file: `REACT_APP_JWT_SECRET=mySecretKey`.

2. **User Registration:**
    - Implement a user registration system to store user data securely.
    - Utilize the JWT secret to generate tokens upon successful registration.

3. **User Login:**
    - Implement a login system using email and password.
    - Upon successful login, generate a JWT token and store it securely on the client side.

4. **Authentication Middleware:**
    - Protect routes that require authentication using middleware.
    - Verify the JWT token on the server side to ensure a valid and authenticated user.

5. **Token Expiry and Refresh:**
    - Implement token expiry to enhance security.
    - Provide a token refresh mechanism to ensure uninterrupted user sessions.

## Installation

Follow these steps to set up Swapify on your local machine:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/ilyes-slc/swapify-frontend.git
    ```

2. **Navigate to Project Directory:**
    ```bash
    cd swapify
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Create Environment Variables:**
    - Create a `.env` file in the project root and add necessary configuration, including the JWT secret.

5. **Run the Application:**
    ```bash
    npm start
    ```

6. **Access Swapify:**
    - Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

Now you're all set to experience the exciting world of product exchange with Swapify!

Feel free to contribute, report issues, or suggest improvements. Happy swapping! 🔄✨

> Note: This is the frontend of Swapify. Find the backend on [https://github.com/ilyes-slc/swapify-backend](https://github.com/ilyes-slc/swapify-backend).
