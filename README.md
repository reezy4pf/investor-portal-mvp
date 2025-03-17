# Canary Wealth Fund - Investor Portal MVP

This is a Minimum Viable Product (MVP) for the Canary Wealth Fund investor portal, a hedge fund focused on crypto trading. The portal provides essential features for investors to view their portfolios, manage documents, and communicate with fund managers.

## Features

- **User Authentication**: Secure login with multi-factor authentication (MFA)
- **Investor Dashboard**: Displays portfolio overview and real-time crypto prices
- **Document Management**: Allows secure document uploads
- **Messaging**: Basic communication between investors and fund managers

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) with MFA
- **Crypto Prices**: CoinGecko API (free)

## Prerequisites

- Node.js and npm installed
- MongoDB running locally (mongodb://localhost:27017) or via MongoDB Atlas
- Git for version control

## Installation

1. Clone the repository:
```
git clone https://github.com/reezy4pf/investor-portal-mvp.git
cd investor-portal-mvp
```

2. Install backend dependencies:
```
npm install
```

3. Install frontend dependencies:
```
cd client
npm install
cd ..
```

4. Create a `.env` file in the root directory with the following variables:
```
MONGO_URI=mongodb://localhost:27017/investor_portal
JWT_SECRET=your-secret-key-here
PORT=5000
```

## Running the Application

1. Start the backend server:
```
cd server
node server.js
```

2. In a new terminal, start the frontend:
```
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Testing the Application

1. Register a user via a tool like Postman:
   - POST to `http://localhost:5000/auth/register`
   - Body: `{ "email": "test@example.com", "password": "password123", "role": "investor" }`
   - Note the MFA secret in the response

2. Use an MFA app (e.g., Google Authenticator) to generate a token using the provided secret

3. Log in at `http://localhost:3000` with your email, password, and MFA token

4. For testing purposes, you may need to manually add data to the MongoDB collections:
   - Create a portfolio for the registered user
   - Add some test messages

## Security Notes

- This is an MVP and should be enhanced with additional security measures before production use
- Use HTTPS in production
- Implement proper input validation
- Consider adding rate limiting
- Enhance the MFA implementation

## Future Enhancements

- Portfolio performance charts and analytics
- Document viewing capabilities
- Enhanced messaging with notifications
- KYC/AML integration
- Automated reporting
- Mobile app version 