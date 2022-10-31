import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'myusername',
  password: process.env.DB_PASS || 'mypassword',
  database: process.env.DB_NAME || 'posrgresDB',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5455,
  dialect: 'postgres',
}
console.log(config);

module.exports = config;
