import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ILink, ITag } from '../intefaces';
import { LinksService } from '../links.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {
  @Input() keyword: string;
  @Output() linkIdToBeDeleted = new EventEmitter<{id: string}>();

  links = [];
  isInEdit: boolean;
  linkObj: ILink;
  subscription: Subscription;

  constructor(private linksService: LinksService) {
  }

  ngOnInit() {
    this.subscription = this.linksService.getLinks().subscribe((links) => {
      return this.links = links;
    });
  }

  onSearchKeyword(keyword: string): void {
    this.keyword = keyword;
  }

  onDeleteLink(id): void {
    console.log(id);
    const r = confirm('Are you sure to delete this link?');
    if (r === true) {
      this.linksService.deleteLink(id);
    }
  }

  onVisitLink(url): void {
    window.open(url, '_blank');
  }

}

