import { Quote } from '@angular/compiler';
import { Quotebody } from './../quote';
import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getRootComponents } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  model: any = {};
  constructor(private configservice: ConfigService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    this.configservice.addQuotes(form.value.author, form.value.year, form.value.quote)
      .subscribe((res) => {
        console.log(res);
      });
    this.model = '';
   }

}
