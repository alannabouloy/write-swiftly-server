'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Song.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    storytags: {
      type: DataTypes.ARRAY(DataTypes.ENUM({
        values: ["hook", "first plot point", "midpoint", "third plot point", "climax", "closure"]
      }))
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};