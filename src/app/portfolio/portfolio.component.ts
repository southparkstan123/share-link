import { Component, OnInit, Input } from '@angular/core';
import { ILink, ITag } from '../intefaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  @Input() links: ILink;
  @Input() numberOfLinks: number;
  @Input() sharedLinks: number;
  username = 'Minami Kotaro';

  ngOnInit() {
  }

}
