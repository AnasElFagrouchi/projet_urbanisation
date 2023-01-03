import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  form_on: boolean = false;
  public updateUserForm!: FormGroup;

  constructor(private http: HttpClient) {
   // this.user = localStorage.getItem('User');
   this.user = {
    username: "test",
    email: "test@test.com ",
    birthDate: "1999-01-01",
   }
  }

  ngOnInit() {
    this.updateUserForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl(''),
      birthDate: new FormControl('', [Validators.required])
    });

  }

  toggleForm(){
    this.form_on = true;

  }
  updateUser(){

    const val = this.updateUserForm.value;
    // validate the form
    if (this.updateUserForm.invalid) {
      // show an error message
      console.log("invalid form");
      return;
    }
    // send the form to the server
    this.http.put('http://localhost:4000/users/'+this.user.userId, {"updateUser": val}, {headers: new HttpHeaders().set('authorization', localStorage.getItem('token') as string)}).subscribe(
    (response:any) => {
      // handle the response from the server
      console.log(response);
      switch (response.status) {
        case 200:
          console.log("user updated");
          this.toggleForm();
          break;
        case 401:
          console.log("invalid token");
          break;
        case 403:
          console.log("forbidden");
          break;
        case 404:
          console.log("User not found");
          break;
        case 500:
          console.log("internal server error");
          break;
        default:
          console.log("unknown error");
          break;
      }
    });
  }

}
