import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';
import { ILink } from '../app/intefaces';

@Injectable()
export class LinksService {

  getLinks() {
    const links = JSON.parse(localStorage.getItem('links'));
    return links !== null ? links : [];
  }

  addLink(link: object) {
    console.log(link);
    let obj = [];
    link['id'] = UUID.UUID();
    if (JSON.parse(localStorage.getItem('links')) === null) {
      obj.push(link);
    }else {
      obj = JSON.parse(localStorage.getItem('links'));
      obj.push(link);
    }
    localStorage.setItem('links', JSON.stringify(obj));
    return JSON.parse(localStorage.getItem('links'));

  }

  deleteLink(linkIdToBeDeleted: string) {
    const allLinks = JSON.parse(localStorage.getItem('links'));
    const result = allLinks.filter(link => link.id !== linkIdToBeDeleted);
    localStorage.setItem('links', JSON.stringify(result));
    return JSON.parse(localStorage.getItem('links'));
  }

  updateLink(linkObj: ILink) {
    const allLinks = JSON.parse(localStorage.getItem('links'));
    const result = allLinks.filter(link => link.id !== linkObj.id);
    result.push(linkObj);
    localStorage.setItem('links', JSON.stringify(result));
    return JSON.parse(localStorage.getItem('links'));
  }

  getLinkById(linkIdToBeGet: string) {
    const allLinks = JSON.parse(localStorage.getItem('links'));
    const result = allLinks.filter(link => link.id === linkIdToBeGet);
    console.log(result[0]);
    return result[0];
  }

}
