import { Model,DataTypes } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';
// model de exemplo para criar outros
class Classes extends Model {
  // public <campo>!: <tipo>;
  year:number;
  studentQuantity:number;
  gradeLetter:string;
}

Classes.init({
  // ... Campos
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  year: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  gradeLetter: {
    allowNull: false,
    type: DataTypes.STRING,
  }
  
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  tableName: 'Classes',
  // modelName: 'example',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS: 
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Classes;
