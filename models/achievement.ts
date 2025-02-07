import { DataTypes, Model } from "sequelize";
import sequelize from "./sequelize";

class Achievement extends Model {
  public id!: number;
  public date_achieved!: Date;
  public title!: string;
  public description!: string;
}

Achievement.init(
  {
    date_achieved: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "achievement",
    freezeTableName: true,
    timestamps: true,
  }
);

export default Achievement;
