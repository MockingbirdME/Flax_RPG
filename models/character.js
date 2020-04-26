'use strict';
module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    strain: DataTypes.STRING,
    traitsList: DataTypes.JSON,
    baseAttributeModifiers: DataTypes.JSON
  }, {});
  Character.associate = function(models) {
    // associations can be defined here
  };
  return Character;
};