require("dotenv").config();

module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres",
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres",
  },
  production: {
    username: process.env.HEROKU_USER,
    password: process.env.HEROKU_PASSWORD,
    database: process.env.HEROKU_DATABASE,
    host: process.env.HEROKU_HOST,
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl:
      {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
