# NgFormDebounceClick

* A simple `directive` with no extenal dependencies.
* Library location: `projects/form-debounce-click` directory of this repository.
* works for Angular 8 and above in all devices.

## Examples/Demo

* A simple Example can be found under `src/app` directory of this repository.


### @Inputs()

| Input            | Type       | Required                   |  Description|
| --------------------- | -------    | -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| validateForm          | FormGroup | optional                  | if validateForm is invalid the click event will be blocked                                           |
| markFormAsTouched     | boolean   | Optional, default: true   | if markFormAsTouched is true, All the controls in validateForm will be marked as touched on click.                                     |
| debounceTime          | number    | Optional, default: 300    |  only one click will be emitted even mutliple click events happened in the given debounceTime                                     |

### @Outputs()

| Output                  | Type       | Required | Description                                            |
| ----------------------- | ---------- | -------- | ------------------------------------------------------ |
| ngFormDebounceSubmit    | void&gt; | **YES**  | emits a debounce click event after checking the validateForm validity if exists |
| ngFormInvalid           | void&gt; | **YES**  | emits a event on click if the validateForm is invalid |

## Usage

1) Register the `NgFormDebounceClickModule` in your app module.
 &gt; `import { NgFormDebounceClickModule } from 'ng-form-debounce-click'`

 ```typescript
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFormDebounceClickModule } from 'projects/ng-form-debounce-click';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgFormDebounceClickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 ```

 2) Use the directive `(NgFormDebounceClickDirective)` in your component.

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="form" [formGroup]="formGroup">
    <label for="name"><b>Name</b></label>
    <input type="text" formControlName="Name">
    <p class="error" *ngIf="formGroup.controls.Name?.errors?.required && formGroup.controls.Name?.touched">Name is required</p>
  
    <label for="ssn"><b>SSN</b></label>
    <input type="text"  formControlName="SSN">
    <p class="error" *ngIf="formGroup.controls.SSN?.errors?.required && formGroup.controls.SSN?.touched">SSN is required</p>
      
    <button ngFormDebounceClick [validateForm]="formGroup" (ngFormDebounceSubmit)="submit()">Submit</button>
  </div>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

}
```

## Running the example in local env

* `npm i`
* Run `ng serve` for a dev server and running the demo app. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.