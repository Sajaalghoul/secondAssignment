import { Injectable } from '@angular/core';
import { User } from '../usersModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  id:number;
  firstname:string;
  lastname:string;
  birthdate:string; 
  email:string;
  phone:number; 
  address:string;
  private users:User[]=[
    {id:123,name:{firstname:"saja",lastname:"alghoul"},birthdate:"7/10/2002",
      email:"sajanabeel2@gmail.com",phone:591234567,address:"gaza"},
    {id:213,name:{firstname:"Heba",lastname:"alghoul"},birthdate:"2/10/2002",
      email:"hebaa@gmail.com",phone:591222567,address:"gaza"} ,
    {id:321,name:{firstname:"mohamed",lastname:"alghoul"},birthdate:"1/5/2007",
      email:"moh@gmail.com",phone:9999989898,address:"west bank"} 
    ];
  constructor() { }
  getUsers():User[]{
    return this.users;
  }
  getUsersbyId(id:number):User{
    return this.users.find(c => c.id === id)
  }
  addUser():void{
    this.users.push(
      {id:this.id,
        name:{firstname:this.firstname,lastname:this.lastname},
        birthdate:this.birthdate,
        email:this.email,
        phone:this.phone,
        address:this.address});
  }
  updateUser(id:number,user:User):void{    
    this.users=this.users.map(item =>{
      if(item=== this.getUsersbyId(id)){
        return {id:user.id,name:{firstname:user.name.firstname,lastname:user.name.lastname},birthdate:user.birthdate,
         email:user.email,phone:user.phone,address:user.address}
      }
      return item;
    })
 
  }
  removeUser(id:number):User[]{
    this.users=this.users.filter(c => c.id !== id);
    return(this.users);

    
  }
}
