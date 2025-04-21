---
title: Database Migrations for beginners
image: '/articles/images/database_migration.png'
description: 'Database Migrations for beginners'
author: André Lucas
date: Mon Jul 22 2024
tags: [Software Engineering, Database, Flyway]
published: true
---

::blog-post
---
date: Tue Aug 06 2024
image: /articles/images/database_migration.png
tags: [software-engineering, database, flyway]
---
# Database Migrations for beginners

![Database Migrations](/articles/images/database_migrations_ci_cd_diagram.png)

Such as we versioning the code source, is a good practice for versioning database scripts.

In my career, many companies have changed database structures using database tools, like Dbeaver, Datagrip, SQL Developer ...

In some teams after finishing the developer task, the DBAs compare the developer database with the production database and apply these changes or

they save the script which was created and executed during the development task in the code resource, this script is as simple as MyTable.sql, and it will be executed manually in all environments.

One way easier is to use the migration approach, in which all database artefacts, are version-controlled with application code together.

To avoid keeping scripts without someone controlling version tools, or changing the database using schema editing tools as mentioned before, we can do this by script migrations. Each script can represent schema changes, database code changes, transaction data updates, fixes... In other words DDL and DML.

Let's see an example:

In this script below I created a table to store clients.

```sql
CREATE TABLE CLIENTS(
    ID uuid PRIMARY KEY,
    VERSION INTEGER NOT NULL,
    NAME VARCHAR(200) NOT NULL,
    EMAIL VARCHAR(200) NOT NULL,
    STATE VARCHAR(200) NOT NULL,
    TYPE VARCHAR(200) NOT NULL,
    PHONE_NUMBER_ATTRIBUTES VARCHAR(200) NOT NULL,
    BILLING_ATTRIBUTES JSONB NOT NULL,
    CREATED_AT TIMESTAMP WITH TIME ZONE NOT NULL,
    LAST_MODIFIED_AT TIMESTAMP WITH TIME ZONE NOT NULL
)
```

But after after sometimes I noticed that I also needed to store the appointments' clients, so let's use the migration power.

Creating a second script file we have for now:

```sql
ALTER TABLE CLIENTS ADD COLUMN APPOINTMENT_ATTRIBUTES JSONB NOT NULL;
```

After running the first, and second scripts using a migration tool, in this case, the Flyway, we can see that both situations are stored in a table in charge of the audit.

In the case of the Flyway, the table is `flyway_schema_history`

```sql
SELECT * FROM flyway_schema_history;
```

Using this approach, all changes are made by migrations. So, we must never use database tools for editions, like Dbeaver, Datagrip, and SQL Developer to run DML and DDL scripts.

Each migration needs a unique identification, we need to track each migration that has been applied, and we need to manage the sequence of each migration, for this, the `flyway_schema_history` stores some data like:

- version — migration script version
- script — the file name of the migration script
- installed by — the user that executed the migration script
- success — if was executed with success or not

## Continuous Integration & Continuous Delivery (CI/CD)

Thus, we can add our migration script as a step of our CI like our code

![CI/CD Process](/articles/images/database_migrations_local_execution_diagram.png)

Test migration scripts locally, with an integration test for example, before that running the migration scripts in CI to deliver in the sandbox environment and consequently to the production environment, is a good practice.

After all, we'll have all way executed since the creation of the scripts until production is passing by the pipeline (CI) and with a lot of options to test the new feature.

At some teams, I worked with another option to execute migration scripts running outside of CI, before deploying, developers run the migration script in your workstation locally.

## Conclusion

Migration tools are a great option, there are other options like Liquibase.

## References

1. [https://docs.spring.io/spring-data/jpa/docs/current/reference/html/](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/)
2. [https://flywaydb.org/](https://flywaydb.org/)
3. [https://martinfowler.com/articles/evodb.html](https://martinfowler.com/articles/evodb.html)
::