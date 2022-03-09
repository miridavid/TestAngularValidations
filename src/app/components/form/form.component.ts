import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) {
    this.userFormGroup = this.formBuilder.group({

      id: [null, [Validators.required]],

      name: this.formBuilder.group({
        firstName: ["", [Validators.required]],
       lastName: [null, [Validators.required]],

      }),
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')
    ]],
      address: [null, []],
      password: this.formBuilder.group({
        pwd: [null, [this.validatePassword]],
        confirmPwd: [null,]
      },),
      gender: [null, []],

    },{ validators: [this.validConfirm] });
  
   }
get formName(){
  return  this.userFormGroup.controls.name as FormGroup

}
get formPassword(){
  return  this.userFormGroup.controls.password as FormGroup

}
  ngOnInit(): void {

  }
   

  validConfirm(formGroup: FormGroup) {
    var form= formGroup.controls.password as FormGroup
  if(!form.controls.pwd.hasError('PasswordNotValid')){
    form.controls.pwd.setErrors(null);
  }
    form.controls.confirmPwd.setErrors(null); 
    const model = formGroup.value as UserModel;
    if(form.controls.confirmPwd.dirty==true){
    if (model.password.confirmPwd !== model.password.pwd) {
      form.controls.confirmPwd.setErrors({ ConfirmPasswordError: true }); 
      if(form.controls.pwd.hasError('PasswordNotValid')){ 
        form.controls.pwd.setErrors({ ConfirmPasswordError: true,PasswordNotValid: true }); 
      return { ConfirmPasswordError: true };
      }
    }
  }
    return null;

   }
   validatePassword(control:any): ValidationErrors | null {
    const value = control.value;
    var regax=/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,}$/
   if(!regax.test(value))
   {

      return { PasswordNotValid: true };

    }

    return null;

  }
submit(){
  if(this.userFormGroup.valid){
  var name=this.formName.controls.firstName.value
  this.router.navigate(['/welcom'],{queryParams:{name}})
}
}
}
