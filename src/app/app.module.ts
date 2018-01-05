import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LinksComponent } from './links/links.component';
import { AddlinkComponent } from './addlink/addlink.component';
import { SearchComponent } from './search/search.component';
import { LinkfilterPipe } from './linkfilter.pipe';
import { LinksService } from './links.service';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LinksComponent,
    AddlinkComponent,
    SearchComponent,
    LinkfilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
