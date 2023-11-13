# FullStack-Rep1
First repetition of a FullStack application
ERD: https://drawsql.app/teams/daddy-rehab-n-friends/diagrams/full-stack-proj-rep-1
Client-Server-Database:![FullStack Rep 1](https://github.com/Zyvod/FullStack-Rep1/assets/134031883/e0e987d5-cf68-42e4-ab17-ddf1d4996d4b)

I am going to make a database with 2 tables. Table one will be the brand name of energy drinks with a one to many relationship to table two which will be the flavors of that brand. The primary key and foreign key of table one will be the brand name. The primary key of table two will be a serial id and the foreign key will be the brand name it belongs to.

The client will allow the user to search by brand(s) or flavor(s) and  add or edit brands and flavors to the database. The client will also allow the user to delete 
brands or flavors from the database that they do not like.

The server will facilitate the basic CRUD functionality of the client request via the use of restful routes.

In future reps I may include a join table showcasing the fact that many brands can have the same flavor ( many to many relationship ).


