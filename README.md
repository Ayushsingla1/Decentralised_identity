# InviCrypt - Decentralized Identity Platform

Welcome to the **Decentralized Identity Platform**! This platform enables users to request official identity documents or certificates from authorized issuers in a secure and decentralized manner. Once the authority approves the request, the document is generated as a PDF, stored securely on IPFS using the QuickNode API, and linked to the user’s decentralized identity for easy verification.

## Features

- **User Identity Requests**: Users can request official documents or identity proofs from authorized entities.
- **Approval Workflow**: Authorized issuers can review, accept, or deny document requests.
- **Decentralized Document Storage**: Approved documents are stored on IPFS, ensuring decentralized, tamper-proof storage.
- **PDF Generation**: Documents are generated in PDF format for easy access and verification.
- **Blockchain Integration**: Requests and approvals are stored on-chain, enhancing transparency and security.
- **QuickNode Integration**: IPFS storage and retrieval are powered by the QuickNode API for streamlined decentralized storage.

## Tech Stack

- **Blockchain Platform**: Ethereum (or compatible blockchain)
- **PDF Generation**: jsPDF
- **IPFS Storage**: QuickNode API
- **Wallet Connect**: Rainbow Kit
- **Frontend**: React, TypeScript, ethers.js

## System Overview

1. **Request Document**: A user submits a request for an official document.
2. **Authority Approval**: The authorized entity reviews and approves or denies the request.
3. **PDF Generation and IPFS Upload**: Upon approval, the document is generated as a PDF and uploaded to IPFS using QuickNode.
4. **Document Access**: The user receives a link to their IPFS-hosted document, stored immutably.

## Getting Started

### Prerequisites

- **Node.js** and **npm**: Ensure you have Node.js and npm installed.
- **MetaMask** or compatible wallet: For blockchain interactions.
- **QuickNode Account**: Set up an account at [QuickNode](https://www.quicknode.com/) to get API keys for IPFS.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ayushsingla1/Decentralised_identity.git
   cd Decentralised_identity
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root folder and add the variables from sample.env.

4. **Start the server**:
   ```bash
   npm run dev
   ```

## Special Links

Deployement Link: [Decentralized Identity Platform](https://invicrypt.teamkamikaze.me/)

## Contributors

- [Ayush Singla](https://github.com/Ayushsingla1)
- [Dev Aggarwal](https://github.com/DevAggarwal03)
- [Tanmay Gupta](https://github.com/Tanmay0215)
