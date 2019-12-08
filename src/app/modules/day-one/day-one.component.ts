import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'day-one',
  templateUrl: './day-one.component.html',
  styleUrls: [ './day-one.component.scss' ],
})
export class DayOneComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
  }

  submit() {
    let str = 'DayOneComponent::submit() ';
    str = str.concat(this.form.valid ? 'Valid' : 'Invalid');
    console.log(str);
  }

  private initForm(): void {
    this.form = this.fb.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ],
      confirmPassword: [ '', Validators.required ],
    });
  }
}
