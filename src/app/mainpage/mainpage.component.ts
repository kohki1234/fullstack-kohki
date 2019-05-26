import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isDetailClicked = false;

  title = 'Tour of Heroes';

  quotes = [];
  authors = [];
  years = [];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.service.getQuotes()
      .subscribe((data) => {
        // console.log(data);

        // tslint:disable-next-line:forin
        for (const key in data) {
          this.quotes.push(data[key]);


        }

        console.log(this.quotes);

      });
  }

  onClick() {
    this.isDetailClicked = !this.isDetailClicked;
    console.log(this.isDetailClicked);
  }

}
