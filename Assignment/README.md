Requirement:

Node.js 
MongoDB 

Clone the repository:

git clone (repo-id)
cd (directory name)

Install dependencies:
npm install


Create a .env file in the root directory and add the following:

PORT= 5000
MONGO_URI=mongodb://



For production:
npm start
with nodemon:
npm run dev

API Endpoints:
Register a User and Addresses
POST /api/users/register

Registers a user and stores multiple addresses.
Request Body Example:

{
  "name": "",
  "addresses": [
    {
      "address": "",
      "city": "",
      "pinCode": "",
    },
    {
      "address": "",
      "city": "",
      "pinCode": "",
    }
  ]
}
Response:
{
  "message": "User and addresses saved successfully!"
}


Project Structure Details
index.js: Entry point of the application. Initializes Express, connects to MongoDB and routes.
config/db.js: Contains the MongoDB connection logic.
controllers/userController.js: Contains the logic for handling user registration and address saving.
models/User.js: Defines the schema and model for the User collection.
models/Address.js: Defines the schema and model for the Address collection.
routes/userRoutes.js: Contains the route for user registration (/register).