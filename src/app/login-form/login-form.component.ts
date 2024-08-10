import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { UserRegistrationService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };

  /*
   * Called when creating an instance of the class
   * @param userRegistrationService 
   * @param dialogRef 
   * @param snackBar 
   */
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar) { }

  //this function will be executed once the component has received all its inputs, ie userData, from user interaction  
  ngOnInit(): void {
  }

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((response) => {
      // Logic for a successful login goes here! (To be implemented)
      localStorage.setItem('Username', JSON.stringify(response.Username));
      localStorage.setItem('token', response.token);
      this.dialogRef.close(); // This will close the modal on success!
      console.log(response);
      this.snackBar.open('Login successful', 'OK', {
        duration: 2000
      });
    }, (response) => {
      console.log(response);
      this.snackBar.open('Login successful', 'OK', {
        duration: 2000
      });
    });
  }
}
