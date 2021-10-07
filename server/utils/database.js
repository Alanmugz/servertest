import { Sequelize } from 'sequelize';

const sequelize = new Sequelize("LoginDB", "root", "123456", {
    host: "mysqldb",
    dialect: "mysql",
    port: 3306,
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


export default sequelize;