import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required])
    });
  }

  public register() {
    const val = this.form.value;
    // validate the form
    if (this.form.invalid) {
      // show an error message
      return;
    }
    // send the form to the server
    this.http.post('http://localhost:4000/register', val).subscribe(response => {
      // handle the response from the server
      console.log(val)
      console.log(response)
    });
  }

}
