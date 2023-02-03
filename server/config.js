const env = require("dotenv");

env.config({
  path: "./.env",
});

const config = {
  db: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
  },
};

module.exports = config;
