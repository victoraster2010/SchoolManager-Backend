import { Model, DataTypes } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';
// model de exemplo para criar outros
class Secretaria extends Model {
  // public <campo>!: <tipo>;
  public userName: string;
  public id:number;
  public password:string;
}

Secretaria.init({
  // ... Campos
  id: {
    allowNull:false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  userName: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  password: {
    type:DataTypes.STRING,
    allowNull:false
  }
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'Secretaria',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS: 
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Secretaria, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Secretaria, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Secretaria.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Secretaria.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Secretaria;
