# LabA3AdvancedWebTechnologies
# E-Commerce API --- Lab Assignment 03
A RESTful E-Commerce API built with Node.js, Express.js, and
GraphQL.
This project demonstrates RESTful API design, correct HTTP methods and
status codes, validation, standardized JSON errors, filtering,
pagination, idempotent PUT operations, and GraphQL field selection to
reduce over-fetching.
# Technologies
Node.js

Express.js

GraphQL

Express GraphQL

Thunder Client  for API testing
# Working
npm install
# Run the Server
npm start
# Server:
http://localhost:3000
GraphQL:
http://localhost:3000/graphql

# Project Structure
ecommerce-api-lab-03
│
├── package.json
├── README.md
├── .gitignore
│
└── src/
    ├── server.js
    ├── data/
    │   └── products.js
    ├── middleware/
    │   └── errorHandler.js
    └── routes/
        └── products.js
        
# GraphQL
Endpoint:
http://localhost:3000/graphql
# Example query:
{
  products {
    id
    title
    price
    category
  }
}
GraphQL lets the client request only the fields it needs, demonstrating
a solution to REST over-fetching.

# Status Code                   Meaning

200 OK                      Successful GET or PUT
201 Created                 Product created
204 No Content              Product deleted
400 Bad Request             Invalid request/validation failure
404 Not Found               Product or route not found

# API Testing Screenshots with Thunder Sream:

<img width="477" height="449" alt="200 Ok" src="https://github.com/user-attachments/assets/be1cc352-0456-4fda-8337-78827bfb115f" />

<img width="481" height="436" alt="201 Created" src="https://github.com/user-attachments/assets/81b4a28e-f031-4847-98fa-17e727e55d01" />

<img width="473" height="453" alt="400 Bad Request" src="https://github.com/user-attachments/assets/bb867abd-44dd-4b18-b141-ff44e1f67267" />

<img width="464" height="436" alt="204 No Content" src="https://github.com/user-attachments/assets/bb34d6f3-e932-4f6f-9eac-5f524752abfc" />


<img width="471" height="426" alt="404" src="https://github.com/user-attachments/assets/fe9f9f3d-5321-4277-95ce-64850ae44dd6" />









