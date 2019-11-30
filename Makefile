.PHONY: up psql pg_dump migrate migrate_latest

default: up

up:
	docker-compose up -d

psql:
	psql postgres://alfred:alfred@127.0.0.1:54327

migrate: migrate_latest pg_dump

migrate_latest:
	knex migrate:latest --cwd src/repo/db/

pg_dump:
	pg_dump postgres://alfred:alfred@127.0.0.1:54327/alfred -s -f src/repo/db/structure.sql
