import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  frmSignup!:FormGroup;
  constructor(private frmBu:FormBuilder) { }

  ngOnInit(): void {
     this.frmSignup= this.frmBu.group({
       name:['',Validators.required],
       mobile:['',Validators.required],
       email:['',Validators.required],
       password:['',Validators.required]
     })
  }


  signup(){
    
  }
}
