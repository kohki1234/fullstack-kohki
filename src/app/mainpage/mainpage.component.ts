import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isDetailClicked = false;
  isApiResultLoaded = false;

  title = 'Tour of Heroes';

  quotes = [];


  constructor(private service: ConfigService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getQuotes()
      .subscribe((data) => {
        // console.log(data);

        // tslint:disable-next-line:forin
        for (const key in data) {
          this.quotes.push(data[key]);
          this.isApiResultLoaded = !this.isApiResultLoaded;
        }


      });


    this.route.paramMap
      .subscribe(params => {
        // console.log(params)
        const id = +params.get('id');
        // tslint:disable-next-line:quotemark
        console.log("id is " + id);
      });
  }

  onClick() {
    this.isDetailClicked = !this.isDetailClicked;
    console.log(this.isDetailClicked);
  }

}
