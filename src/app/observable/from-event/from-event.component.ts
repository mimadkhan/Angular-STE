import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignService } from 'src/app/service/design.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {
 
  @ViewChild('addBtn') addBtn!:ElementRef;
  
  constructor(private designSrv : DesignService) { }

  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addBtn.nativeElement,'click').subscribe((res)=>{
      let resValue = 'Video ' + count++;
      // console.log('Video '+ count++);
      this.designSrv.print(resValue,'elContainer');
      this.designSrv.print(resValue,'elContainer2');
    });  }

  ngOnInit(): void {
  }

  // print(val: string, containerId: string){
  //   let el = document.createElement('li');
  //   el.innerText= 'RXJS Series ' + val;
  //   document.getElementById(containerId)?.appendChild(el);
  // }
}
