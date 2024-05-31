# Product Management API

This project is a simple Order Management API built with Node.js, Express, and MongoDB. It provides endpoints to create and retrieve orders.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v12 or later)
- npm (v6 or later)
- MongoDB

## Installation

1. **Clone the repository**

   git clone https://github.com/yourusername/product-management-api.git
   cd order-management-api

2. **Install dependencies**

    Copy code
    npm install
    Set up environment variables

3. **Create a .env file in the root of your project and add the following:**

    PORT=3000
    DATABASE_URL = mongodb+srv://<username>:<password>@cluster0.......mongodb.net/<database name>?retryWrites=true&w=majority&appName=Cluster0

## API Endpoints
get all products
- Endpoint: /api/products

get all orders
Endpoint: /api/orders

get single product by id
- Endpoint: /api/products/66582ed1600d49cfa61e9e34

get single product by email
- Endpoint: /api/orders?email=level2@programming-hero.com

## Built in server
    https://assignment-2-self-two.vercel.app 

## Contributing
Feel free to fork this repository and make changes. Pull requests are welcome.
