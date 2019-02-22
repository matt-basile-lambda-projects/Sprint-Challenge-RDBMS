1. Explain the difference between RDBMS and SQL.
- Relational Database Management Systems are softwares that allow us to create, update and interact with relational databases. These systems generally rely on SQL, a programming language, to achieve these goals with the DataBase. 
RDBMS is the framework/structure of the game and SQL allows us to execute our objectives.

2. Why do tables need a primary key?
- Primary keys allow us to make our data entries unique, so that when we create relations or simply need to retrieve that piece of data we can rely on the primary key. It also helps prevent issues with duplicate values. 
3. What is the name given to a table column that references the primary key on another table.
- That is a foreign key! It allows us to connect with another table as we use our primary keys as linking identifiers.
4. What do we need in order to have a many to many relationship between two tables.
- We need a "junction table" or a third table that acts as a connector between the two tables. This connection takes in the primary keys for the tables and allows them to create new instances where the necessary relations are connected. (It's a little tricky at first!)