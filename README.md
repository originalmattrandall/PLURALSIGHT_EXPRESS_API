# Pluralsight Training Course for Node/Express Api

### Supported Api Calls
- [x] GET: http://localhost:$[PORT]/api/books -> returns all books in the DB
- [x] GET: http://localhost:$[PORT]/api/books?genre=Fiction -> returns all books with the specified genre, in this case Fiction
- [x] GET: http://localhost:4000/api/books/$[ID] -> returns A specific book by its Id

### Requirements
1. Node must be installed on your machine

### Starting the project

### Setting up MongoDB
1. Download and install a local instance of mongoDB from: https://www.mongodb.com/try/download
2. Follow the instructions in DataImportInstructions.txt

### Refactor opportunities
- [ ] book search by query (genre) is case sensitive, Make it not so
- [ ] Better approach to determine the environment (tes/pilot/prod) and connect to the appropriate database