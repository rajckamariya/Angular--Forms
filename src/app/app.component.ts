import { Component, VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'teacher';
  genders = ['Male', 'Female'];
  answer;
  submitted = false;
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  suggestUserName() {
    // this.signUpForm.setValue({
    //   userdata: {
    //     username: 'Guest',
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });
    this.signUpForm.form.patchValue({
      userdata: {
        username: 'Guest'
      }
    });
  }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userdata.username;
    this.user.email = this.signUpForm.value.userdata.email;
    this.user.question = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
