frontend deployed:: https://658165f76d81be009f8af8d4--vermillion-twilight-227c5f.netlify.app/

backend deployed on render:: https://yoga-backend-nuqy.onrender.com/admin/enrollment/participant/
# User Enrollment and Fee Payment Application

## Overview

This application utilizes Django (backend) and React (frontend) to simplify user enrollment and fee payment processes. Registration and fee payment are designed to be quick and effortless.

## Setup

### Backend (Django):

1. **Navigate:**
   - Open terminal and `cd` to the backend directory.

2. **Migrations:**
   - Run `python manage.py migrate` to apply database changes.

3. **Server:**
   - Start the Django development server with `python manage.py runserver`.

### Frontend (React):

1. **Navigate:**
   - Open terminal and `cd` to the frontend directory.

2. **Dependencies:**
   - Install required packages with `npm install`.

3. **Server:**
   - Launch the React development server with `npm start`.

## Accessing the Application

- Open your web browser and visit [http://localhost:3000/](http://localhost:3000/).

## Features

### User Registration:

- Register with basic information: Name, Age, Phone Number, and Time Slot.
- Age Limit: Only users aged 18-65 can register.

### Fee Payment:

- Participants can pay fees using their Participant ID.

## Usage

### User Registration:

1. Access the Registration Form.
2. Enter your details.
3. Click "Register".

### Fee Payment:

1. Access the Fee Payment Form.
2. Enter your Participant ID.
3. Click "Pay Fee".

## Important

- **Running Servers:**
  - Ensure both Django and React development servers are running.

- **Age Restriction:**
  - To register, users must be between 18 and 65 years old.

## My Approach to Solve This Problem

### Requirement Analysis:

- Analyzing the requirements to understand the scope and functionalities of the system.

### Identifying Roles and Use Cases:

- Defining the various roles in the system (e.g., participants) and outlining the specific use cases or actions they can perform.

### ER Diagram:

- Creating an Entity-Relationship (ER) diagram to visually represent the data model and relationships between entities in the system.

### Backend Development:

- Forming the model for participants.
- Implementing REST APIs using Django (assuming Django due to mentions like serializers.py).
- Writing view functions to handle different actions, such as participant enrollment and fee payment.
- Testing APIs locally using Thunder Client.

### APIs:

- Forming two APIs—one for participant enrollment and another for fee payment.
- Enabling participants to enroll each month and pay fees at any time.

### Frontend Development:

- Developing a React application to interact with the backend.
- Creating two forms on the same page—one for participant enrollment and another for fee payment.
- Ensuring proper validation and user-friendly interfaces for data entry.
