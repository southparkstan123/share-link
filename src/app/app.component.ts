import { Component } from '@angular/core';
import { Link } from './link';
import { Observable } from 'rxjs/Observable';
import { LinksService } from './links.service';
import { ILink, ITag } from '../app/intefaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LinksService],
})
export class AppComponent {

  // links = [];
  // keyword = '';
  // numberOfLinks = 0;
  // sharedLinks = 0;
  // linkObj = {};
  // linkIdToBeDeleted = '';
  // linkIdToBeGet = '';
  // linkObjToUpdated = {};

  constructor(private _linksService: LinksService, private router: Router) {
    // this.onLoadLinks();
  }

  // onSearchKeyword(keyword: string): void {
  //   this.keyword = keyword;
  // }

  // onLoadLinks(): void {
  //   this.links = this._linksService.getLinks();
  //   this.numberOfLinks = this.links.length;
  //   this.sharedLinks = this.links.filter(link => link.isShared === true).length;
  // }

  // onAddLink(linkObj: object): void {
  //   console.log(linkObj);
  //   this.linkObj = linkObj;
  //   this.linkObj = this._linksService.addLink(linkObj);
  //   this.onLoadLinks();
  // }

  // onDeleteLink(linkIdToBeDeleted: string): void {
  //   console.log(linkIdToBeDeleted);
  //   this.linkIdToBeDeleted = this._linksService.deleteLink(linkIdToBeDeleted);
  //   this.onLoadLinks();
  // }

  // onGetLinkById(linkIdToBeGet: string): void {
  //   console.log(linkIdToBeGet);
  //   this.linkIdToBeGet = this._linksService.getLinkById(linkIdToBeGet);
  // }

  // onUpdateLink(linkObjToUpdated: ILink): void {
  //   console.log(linkObjToUpdated);
  //   this.linkObjToUpdated = this._linksService.updateLink(linkObjToUpdated);
  //   this.onLoadLinks();
  // }

  toAddLinkPage() {
    this.router.navigate(['/addlink']);
  }

}
