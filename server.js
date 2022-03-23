const { app } = require('./app');

//Utils
const { sequelize } = require('./util/database');

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('DatabaseSynced'))
  .catch((err) => console.log(err));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
