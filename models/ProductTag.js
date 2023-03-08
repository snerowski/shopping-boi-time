const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

module.exports = ProductTag;
