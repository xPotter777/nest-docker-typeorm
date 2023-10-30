// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataSource, DataSourceOptions } = require('typeorm');

const dbConfig = config.get('database');

const options = {
  type: dbConfig.type,
  host: process.env.DATABASE_HOSTNAME || dbConfig.host,
  port: process.env.DATABASE_PORT || dbConfig.port,
  username: process.env.DATABASE_USERNAME || dbConfig.username,
  password: process.env.DATABASE_PASSWORD || dbConfig.password,
  database: process.env.DATABASE_DB_NAME || dbConfig.database,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  autoLoadEntities: true,
};

const dataSource = new DataSource(options);

dataSource.initialize();

module.exports = { dataSource };
