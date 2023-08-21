const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'nodejssequelize',
   'root',
   '',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
   );

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

sequelize.query(
  'SELECT * FROM students WHERE student_id = :id',
  {
    replacements: { id: '4dcb559e-e48d-4ee5-a2d4-81f2219fd275' },
    type: sequelize.QueryTypes.SELECT
  }
 ).then(result => {
    console.log(result);
}).catch((error) => {
    console.error('Failed to insert data : ', error);
});