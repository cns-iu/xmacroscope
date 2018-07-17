# Database development
This project uses Sequelize as an ORM for the backend database. When developing you may need to update the database schema, chaning tables or adding new ones. To ensure that this database structure change is properly handled across each environment follow these steps to create Sequelize CLI migration scripts that will help developers and deployments keep the database in sync with schema changes.

## Creating a new table/model

```bash
cd packages/server-graphql/
node_modules/.bin/sequelize model:generate --name DatabaseTableName --attributes exampleField:string
```
 
This will create two files:
* `packages/server-graphql/src/db/models/databasetestname.js`
* `packages/server-graphql/src/db/migrations/ISODATESTRING-create-database-table-name.js`
...where `ISODATESTRING` is the current datetime string.

The `models` file is the definition of the database model that is used by the server when running GraphQL. Manually edit this file to contain any of the fields you need in the database table. You will need to manually convert this file to match our ES6 style.

The `migrations` file is a state-in-time file that tells the Sequelize CLI how to update the database when you run `db:migrate` on various machines. As you change the database schema you will add new files to the the migrations directory defining the sequelize actions needed to update the database schema so that it reflects the fields defined in the models file. 

After editing these files to reflect the desired table shape, you can run the migration on your database with:
```bash
node_modules/.bin/sequelize db:migrate
```

## Updating a table/model
After you create a table, you might need to modify the table schema, adding or deleting fields. To do this, first generate a new migration file for the table. This time we use the `migration:generate` command, since we don't need to create the model, just a migration file for an existing model.

```bash
cd packages/server-graphql/
node_modules/.bin/sequelize migration:generate --name DatabaseTableName 
```
This will create a new timestamped skeleteon file in your migrations directory. You must manually edit this file using the [Sequelize Query Interface to create, modify, or delete table structure](http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html).

Once you're happy with your new structure, update the model definition for the table in the `model` folder.

You can test your migration by running

```bash
node_modules/.bin/sequelize db:migrate
```

## A note on pluralization
Sequelize pluralizes database tables. So when you are working directly with the database, like when writing migration code, you need to refer directly to the plural database names.

When working with the JS sequelize code for the server and when you are using the Sequelize CLI, you should use the singluar object name. E.g. Person vs People, User vs Users. Model names should use CapitalCase.
