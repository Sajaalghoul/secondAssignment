import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
interface User{
  id:number;
  name:{firstname:string,lastname:string};
  birthdate:string;
  email:string;
  phone:number;
  address:string;
  actions?:any;
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  Oid:number=null;
  userId:User;
  EditFormGroup:FormGroup;
  constructor(private route:ActivatedRoute,private usersService:UsersService) {
    this.intializeFormGroup()
   }
  
  intializeFormGroup():void {
    this.EditFormGroup=new FormGroup({
      Id:new FormControl('',[Validators.required]),
      Name:this.intializeNameFormGroup(),
      Birthdate:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required,Validators.email]),
      Phone:new FormControl('',[Validators.required]),
      Address:new FormControl('',[Validators.required]),
      
    });
  }

  intializeNameFormGroup(): FormGroup {
    return new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',Validators.required)
    })
} 
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.has('id')){
       this.Oid=Number(this.route.snapshot.paramMap.get('id'));
      this.userId=this.usersService.getUsersbyId(this.Oid);
      this.EditFormGroup.get('Id').setValue(this.userId.id);
      this.EditFormGroup.get('Name').setValue({
          firstname:this.userId.name.firstname,
          lastname:this.userId.name.lastname
        });
        this.EditFormGroup.get('Birthdate').setValue(this.userId.birthdate);
        this.EditFormGroup.get('Email').setValue(this.userId.email);
        this.EditFormGroup.get('Phone').setValue(this.userId.phone);
        this.EditFormGroup.get('Address').setValue(this.userId.address);
  
    }}
    onEdit():void{
      
      if(this.route.snapshot.paramMap.has('id')){
        if(this.EditFormGroup.valid){
          this.usersService.updateUser(Number(this.route.snapshot.paramMap.get('id')),
          {id:Number(Number(this.EditFormGroup.value.Id)),
            name:{firstname:this.EditFormGroup.value.Name.firstname,lastname:this.EditFormGroup.value.Name.lastname},
            birthdate:this.EditFormGroup.value.Birthdate,
            email:this.EditFormGroup.value.Email
            ,phone:Number(this.EditFormGroup.value.Phone)
            ,address:this.EditFormGroup.value.Address})
            window.alert("Edited!!");
        }
        else{
          window.alert("PLEASE FILL ALL REQUIRED FIELDS CORRECTLY!!");
        }
     
       
    }
   
  }
    
  }




