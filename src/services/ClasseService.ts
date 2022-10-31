import Classes from '../database/models/ClassesModel';

interface IClasses {
  id?: number;
  year: number;
  gradeLetter:string;
  studentQuantity: number;
}
export default class ClasseService  {
  public getAll = async ():Promise<IClasses[]> => {
    const classes = await Classes.findAll();
    return classes;
  }
  public getClassesByYear = async (year:number):Promise<IClasses[]> => {
    const currentYear = new Date().getFullYear();
    if(year > currentYear) throw Error('InvalidYear') 
    const classe = await Classes.findAll({where: {year}});
    if(classe.length < 1) throw Error('NoClassFoundYear');
    return classe;
  }
  public findById = async (id:number):Promise<IClasses> => {
    const classe = await Classes.findOne({where: {id}});
    if(!classe) throw Error('NoClassFoundId');
    return classe;
  }
  public create = async (props:IClasses):Promise<void> => {
    const {year,gradeLetter,studentQuantity} = props;
    const currentYear = new Date().getFullYear();
    if(!year || !gradeLetter || !studentQuantity) throw Error('InvalidFieldCreateClass');
    else if(year > currentYear) throw Error('InvalidYear');
    await Classes.create({props});
  }
}