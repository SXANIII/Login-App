import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(private http: HttpClient) { }

  private getUrl = 'http://localhost:3000/';

  inputEmail = '';

  public ValidateEmail(inputEmail: string):Observable<any>{
    if(inputEmail.length !== 0){
    return this.http.get<any>(this.getUrl+ inputEmail);
    }
    else 
    return this.http.get<any>(this.getUrl+ 'No Email');
  }

}
