import { Sequelize } from "sequelize";

const schema = "tutorial_sequelize";
const username = "root";
const password = "root";

const sequelize = new Sequelize(schema, username, password, {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => console.log(`Database connected`))
  .catch((e: any) => console.log(`Database connection failed`, e));

export default sequelize;
