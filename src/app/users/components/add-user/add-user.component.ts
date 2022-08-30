import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  AddFormGroup:FormGroup;
  constructor(private usersService:UsersService) {
    this.intializeFormGroup()
   }
  intializeFormGroup():void {
    this.AddFormGroup=new FormGroup({
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
    
   }
   onAdd():void{
    if(this.AddFormGroup.valid){
      this.usersService.id=Number(this.AddFormGroup.value.Id);
      this.usersService.firstname=this.AddFormGroup.value.Name.firstname;
      this.usersService.lastname=this.AddFormGroup.value.Name.lastname;
      this.usersService.birthdate=this.AddFormGroup.value.Birthdate; 
      this.usersService.email=this.AddFormGroup.value.Email;
      this.usersService.phone=Number(this.AddFormGroup.value.Phone); 
      this.usersService.address=this.AddFormGroup.value.Address;
      this.usersService.addUser();
     
      function clear(FormGroupp:any):void{//recursion for many levels
        Object.keys(FormGroupp.controls).forEach(
          key=>{
            if(FormGroupp.get(key) instanceof FormGroup){
                 clear(FormGroupp.get(key) as FormGroup)
                }
            else{
              FormGroupp.get(key).setValue(null);}
          } )
      }
      clear(this.AddFormGroup);
      window.alert("Added!!");
    }
    else{
      window.alert("PLEASE FILL ALL REQUIRED FIELDS CORRECTLY!!");
    }
   
   
   
   }
   
  
  
}