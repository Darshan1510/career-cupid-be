# Career Cupid Backend

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)

## Introduction

Career Cupid Backend is the server-side application for Career Cupid, a platform that helps users find their ideal career paths through personalized recommendations and resources. This backend service is responsible for handling API requests, managing data storage, and providing the business logic for the platform.

## Features

- **User Authentication**: Secure user login and registration with JWT tokens.
- **Career Recommendations**: Algorithm-based career suggestions based on user input.
- **Resource Management**: CRUD operations for career-related resources.
- **Job Listings**: Fetch and filter job listings from various sources.
- **Admin Dashboard**: Manage users, resources, and job listings.

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose for data modeling
- **Authentication**: JWT for secure authentication
- **APIs**: RESTful API architecture
- **Testing**: Mocha & Chai for unit and integration tests

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn** (v1.x or higher)
- **MongoDB** (v4.x or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Darshan1510/career-cupid-be.git
   cd career-cupid-be
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The server will start on `http://localhost:5000`.

2. **Running Tests:**

   To run the test suite, use:

   ```bash
   npm test
   ```

   or

   ```bash
   yarn test
   ```
