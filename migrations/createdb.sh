#!/bin/sh
# This is a bash script that will attempt to create a database with the name set in the .env file
# This is not something that you will need in your project and is just used for this example

set -o allexport
source .env
set +o allexport

DATABASE_NAME=${DATABASE_NAME:="pgpromise_products"}
DATABASE_HOST=${DATABASE_HOST:="localhost"}
DATABASE_USERNAME=${DATABASE_USERNAME:="postgres"}
DATABASE_PASSWORD=${DATABASE_PASSWORD:=""}
DATABASE_PORT=${DATABASE_PORT:="5432"}

# create database with psql
echo "SELECT 'CREATE DATABASE $DATABASE_NAME' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$DATABASE_NAME')\gexec" \
  | psql postgresql://$DATABASE_USERNAME:$DATABASE_PASSWORD@$DATABASE_HOST:$DATABASE_PORT/postgres
