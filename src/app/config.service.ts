import { Quotebody } from './quote';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '@angular/compiler';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }


  endpointurl = 'https://quote-api-kohki.herokuapp.com/quotes';


  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }


  getQuotes() {
    return this.http.get(this.endpointurl);
  }

  addQuotes(author: string, year: string, quote: string) {
    const body = [author, year, quote];
    console.log('addquotes called');
    return this.http.post(this.endpointurl, body, httpOptions);
  }

  deleteQuote(id) {
    //
  }

}
