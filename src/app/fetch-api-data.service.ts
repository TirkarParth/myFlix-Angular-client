import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'YOUR_API_URL_HERE'; // Replace with your API URL

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(private http: HttpClient) { }

  // User registration
  public userRegistration(userDetails: any): Observable<any> {
    return this.http.post(apiUrl + '/users', userDetails);
  }

  // User login
  public userLogin(userDetails: any): Observable<any> {
    return this.http.post(apiUrl + '/login', userDetails);
  }

  // Get all movies
  public getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + '/movies');
  }

  // Get a single movie by title
  public getMovie(title: string): Observable<any> {
    return this.http.get(apiUrl + `/movies/${title}`);
  }

  // Get director details by name
  public getDirector(name: string): Observable<any> {
    return this.http.get(apiUrl + `/directors/${name}`);
  }

  // Get genre details by name
  public getGenre(name: string): Observable<any> {
    return this.http.get(apiUrl + `/genres/${name}`);
  }

  // Update user details
  public updateUser(userDetails: any): Observable<any> {
    return this.http.put(apiUrl + `/users/${userDetails.Username}`, userDetails);
  }

  // Delete user
  public deleteUser(username: string): Observable<any> {
    return this.http.delete(apiUrl + `/users/${username}`);
  }

  // Add a movie to the user's favorites
  public addFavoriteMovie(username: string, movieID: string): Observable<any> {
    return this.http.post(apiUrl + `/users/${username}/movies/${movieID}`, null);
  }

  // Remove a movie from the user's favorites
  public removeFavoriteMovie(username: string, movieID: string): Observable<any> {
    return this.http.delete(apiUrl + `/users/${username}/movies/${movieID}`);
  }
}
