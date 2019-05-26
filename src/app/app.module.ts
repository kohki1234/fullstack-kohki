import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AddQuoteComponent,
    DeleteQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainpageComponent
       },
       {
        path: 'add-quote',
        component: AddQuoteComponent
       },
       {
        path: 'delete-quote',
        component: DeleteQuoteComponent
       }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
