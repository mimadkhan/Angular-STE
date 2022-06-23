import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor() { }

  print(val: any, containerId: string){
    let el = document.createElement('li');
    // el.innerText= 'RXJS Series ' + val;
    el.innerText= val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
