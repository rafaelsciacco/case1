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
  email = '';
  idade = '';
  cidade = '';
  estado = '';
  usuario = '';
  senha = '';
  titleAlert = 'Campo obrigatório!';
  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'email': [null, Validators.required],
      'idade': [null],
      'cidade': [null, Validators.required],
      'estado': [null, Validators.required],
      'usuario': [null, Validators.required],
      'senha': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });

  }
  addPost(post) {
    this.name = post.name;
    this.phone = post.phone;
    this.email = post.email;
    this.idade = post.idade;
    this.cidade = post.cidade;
    this.estado = post.estado;
    this.usuario = post.usuario;
    this.senha = post.senha;
  }
}
