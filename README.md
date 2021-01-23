# Pluralsight Training Course for Node/Express Api

### Supported Api Calls
GET: `http://localhost:$[PORT]/api/books`
- Returns all books in the database
GET: `http://localhost:$[PORT]/api/books?genre=Fiction`
- returns all books with the specified genre
GET: `http://localhost:4000/api/books/$[ID]`
- returns a specific book by its ID

### Requirements
1. Node must be installed on your machine
2. Local instance of MongoDb with a database called bookAPI
    - please see the DataImportInstructions.txt

### Starting the project
1. In one terminal Start up your mongodb instance.
2. Open a new terminal and navigate to this directory (pluralsight_express_api)
3. In this new terminal run the `npm install` command
4. Once done run the `npm start` command

### Running Tests
1. After the project is all setup (follow points 1-3 in Starting the project)
2. In the App.js file uncomment line 14 (process.env.ENV = 'Test')
- tests include full end to end integration tests, this variable ensures that a test db is used and not the production one
2. run `npm test`

### Setting up MongoDB
1. Download and install a local instance of mongoDB from: https://www.mongodb.com/try/download
2. Follow the instructions in DataImportInstructions.txt

### Refactor opportunities
- [ ] book search by query (genre) is case sensitive, Make it not so
- [ ] Better approach to determine the environment (tes/pilot/prod) and connect to the appropriate database
- [ ] Add more itnegration tests
- [ ] Add morew unit tests