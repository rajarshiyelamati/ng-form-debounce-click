import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormInvalidError = false;
  formGroup = new  FormGroup({
    Name: new FormControl('', Validators.required),
    SSN: new FormControl('', Validators.required),
  });
 
  submit(){
    alert('success!!.. form submitted')
  }

  formInvalid(){
    this.isFormInvalidError = true;
  }
}
