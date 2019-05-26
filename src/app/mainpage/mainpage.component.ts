import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {


  title = 'Tour of Heroes';

  quotes = [];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.service.getQuotes()
      .subscribe((data) => {
        // console.log(data);

        // tslint:disable-next-line:forin
        for (const key in data) {
          // console.log(key, data[key].quote);

          this.quotes.push(data[key].quote);
        }

        console.log(this.quotes);

      });
  }

}
