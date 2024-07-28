require("dotenv").config();

const { 
  DEV_DATABASE_HOST, 
  DEV_DATABASE_USERNAME, 
  DEV_DATABASE_PASSWORD,
  TEST_DATABASE_USERNAME,
  TEST_DATABASE_PASSWORD,
  TEST_DATABASE_HOST
} = process.env;
module.exports = {
  development: {
    username: DEV_DATABASE_USERNAME,
    password: DEV_DATABASE_PASSWORD,
    database: "write-swiftly-database",
    host: DEV_DATABASE_HOST,
    dialect: "postgres"
  },
  test: {
    username: TEST_DATABASE_USERNAME,
    password: TEST_DATABASE_PASSWORD,
    database: "swiftly-test-database",
    host: TEST_DATABASE_HOST,
    dialect: "postgres"
  },
  /*
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }*/ //these don't come into play until app is in production so config them after
}
