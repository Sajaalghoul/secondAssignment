export interface User{
    id:number;
    name:{firstname:string,lastname:string};
    birthdate:string;
    email:string;
    phone:number;
    address:string;
    actions?:any;
  }