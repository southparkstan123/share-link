import { Component, OnInit, Input } from '@angular/core';
import { ILink, ITag } from '../intefaces';
import { Subscription } from 'rxjs/Subscription';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  numberOfLinks: number;
  sharedLinks: number;
  subscription: Subscription;
  constructor(private linksService: LinksService) {
    this.subscription = this.linksService.getLinks().subscribe(links => {
      this.numberOfLinks = links.length;
      this.sharedLinks = links.filter(link => link.isShared === true).length;
    });
  }
  // @Input() links: ILink;
  // @Input() numberOfLinks: number;
  // @Input() sharedLinks: number;
  username = 'Minami Kotaro';

  ngOnInit() {
  }

}
