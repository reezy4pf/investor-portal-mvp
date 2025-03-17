# Canary Wealth Fund - Investor Portal MVP

This is a Minimum Viable Product (MVP) for the Canary Wealth Fund investor portal, a hedge fund focused on crypto trading. The portal provides essential features for investors to view their portfolios and interact with fund managers.

## Features

- **User Authentication**: Secure login with multi-factor authentication (MFA) to ensure that only authorized users can access the portal.
- **Investor Dashboard**: Displays a comprehensive overview of the investor's portfolio, including real-time crypto prices fetched from the CoinGecko API.
- **Document Management**: Allows investors and fund managers to securely upload and manage documents.
- **Messaging**: Enables basic communication between investors and fund managers, facilitating better interaction and support.

## Tech Stack

- **Frontend**: Built with React.js for a dynamic and responsive user interface.
- **Backend**: Powered by Node.js with Express for handling server-side logic and API endpoints.
- **Database**: Utilizes MongoDB for storing user data, portfolios, documents, and messages.
- **Authentication**: Implements JSON Web Tokens (JWT) for secure session management along with MFA for added security.
- **Crypto Prices**: Integrates with the CoinGecko API to provide real-time cryptocurrency price updates.

## Security Notes

- This is an MVP and should be enhanced with additional security measures before production use.
- Use HTTPS in production to ensure secure data transmission.
- Implement proper input validation to prevent common security vulnerabilities.
- Consider adding rate limiting to protect against brute force attacks.
- Enhance the MFA implementation for better security.

## Future Enhancements

- **Portfolio Performance Charts and Analytics**: Add visual charts and analytics tools to help investors better understand their portfolio performance over time.
- **Document Viewing Capabilities**: Implement features to view documents directly within the portal, without needing to download them.
- **Enhanced Messaging with Notifications**: Improve the messaging system to include real-time notifications, ensuring timely communication between investors and fund managers.
- **KYC/AML Integration**: Integrate Know Your Customer (KYC) and Anti-Money Laundering (AML) compliance checks to ensure regulatory compliance.
- **Automated Reporting**: Add automated reporting features to generate and send regular portfolio performance reports to investors.
- **Mobile app version for admin