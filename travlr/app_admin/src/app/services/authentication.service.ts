import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { TripDataService } from '../services/trip-data.service';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Setup our storage and service access
  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) { }

  // Variable to handle Authentication Responses
  authResp: AuthResponse = new AuthResponse();

  // Get our token from our Storage provider.
  // NOTE: For this application we have decided that we will name
  // the key for our token 'travlr-token'
  public getToken(): string {
    let out: any;
    out = this.storage.getItem('travlr-token');

    // Make sure we return a string even if we don't have a token
    if (!out) {
        return '';
    }
    return out;
  }

  // Save our token to our Storage provider.
  // NOTE: For this application we have decided that we will name
  // the key for our token 'travlr-token'
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  // Logout of our application and remove the JWT from Storage
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  // Boolean to determine if we are logged in and the token is
// still valid. Even if we have a token we will still have to
// reauthenticate if the token has expired
public isLoggedIn(): boolean {
  const token: string = this.getToken();
  if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
      return payload.exp > (Date.now() / 1000); // Check if the token is still valid
  } else {
      return false;
  }
}

// Retrieve the current user. This function should only be called
// after the calling method has checked to make sure that the user
// is logged in.
public getCurrentUser(): User {
  const token: string = this.getToken();
  const { email, name } = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
  return { email, name } as User;
}


public login(user: User, passwd: string): void {
    this.tripDataService.login(user, passwd)
        .subscribe({
            next: (value: any) => {
                if (value) {
                    // console.log(value);
                    this.authResp = value;
                    this.saveToken(this.authResp.token);
                }
            },
            error: (error: any) => {
                console.log('Error: ' + error);
            }
        });
}


public register(user: User, passwd: string): void {
    this.tripDataService.register(user, passwd)
        .subscribe({
            next: (value: any) => {
                if (value) {
                    // console.log(value);
                    this.authResp = value;
                    this.saveToken(this.authResp.token);
                }
            },
            error: (error: any) => {
                console.log('Error: ' + error);
            }
        });
}

}
