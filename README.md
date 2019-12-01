
#### To create a new migration
```
$ knex migrate:make  --cwd src/repo/db/ create_users_table
```

#### Run migrations
This will run all migrations that have'nt yet been run and then dump the schema to `src/repo/db/structure.sql`
```
$ make migrate
```
