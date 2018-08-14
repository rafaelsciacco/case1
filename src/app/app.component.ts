import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
  post: any;
  phone = '';
  name = '';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'email': [null],
      'idade': [null],
      'cidade': [null],
      'estado': [null],
      'usuario': [null],
      'senha': [null],
      'validate': ''
    });

  }

  addPost(post) {
    this.name = post.name;
    this.phone = post.phone;
  }
}
