import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor() { }

  print(val: string, containerId: string){
    let el = document.createElement('li');
    el.innerText= 'RXJS Series ' + val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
