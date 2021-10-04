# Flave API Challenge
Objective: Make a Webapp that interacts with an API which utilizes a DB  


## Instructions
### Creating the Webapp
- Make a page that allows users to login
- Make a page that will list their grocery list of which can be added to, removed from and edited
- Add a logout button to end session

### Creating the API
- Write the API with node and expressJS
- Write following endpoint:
   - POST login (username, password)
   - GET groceries (username)
   - POST grocery (username, grocery_name)
   - DELETE grocery (username, grocery_name)
   - PUT grocery (username, old_grocery_name, new_grocery_name)

### Creating the DB
- Write the DB with Postgres
- Store a User table with needed properties
- Think of a way to protect the User tables password property (in case db leaked publicly)
- Store a Grocery table with needed properties
- Create any other tables deemed needed

## Commands
### Starting up
```
docker-compose up
```