import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  endpointurl = 'https://quote-api-kohki.herokuapp.com/quotes';

  getQuotes() {
    return this.http.get(this.endpointurl);
  }

}
