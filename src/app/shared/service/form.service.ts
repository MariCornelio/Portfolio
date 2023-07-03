import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormContact } from '../interfaces/contact-form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}
  apiurl: string = 'https://formsubmit.co/ajax/katherinacornelio@gmail.com';

  sendMessage(body: FormContact): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    return this.http.post(this.apiurl, body, httpOptions);
  }
}
