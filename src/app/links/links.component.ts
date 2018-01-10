import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ILink, ITag } from '../intefaces';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})

export class LinksComponent implements OnInit {
  @Input() links: ILink;
  @Input() keyword: string;
  @Input() id: string;
  @Output() linkIdToBeDeleted = new EventEmitter<{id: string}>();

  isInEdit: boolean;
  linkObj: ILink;
  editLink: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.isInEdit = false;
  }

  onSearchKeyword(keyword: string): void {
    this.keyword = keyword;
  }

  onDeleteLink(id): void {
    console.log(id);
    const r = confirm('Are you sure to delete this link?');
    if (r === true) {
      this.linkIdToBeDeleted.emit(id);
    }
  }

  onVisitLink(url): void {
    window.open(url, '_blank');
  }

}

