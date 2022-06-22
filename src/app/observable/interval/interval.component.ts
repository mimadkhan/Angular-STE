import { DesignService } from 'src/app/service/design.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
 
  videoSubscription?:Subscription;

  constructor(private designSrv:DesignService) { }

  ngOnInit(): void {
    const broadCastVideo = interval(1000);
    // timer(delay,interval)
    // const broadCastVideo = timer(5000,1000);

    this.videoSubscription = broadCastVideo.subscribe((res)=>{
      let resValue = 'Video ' + res;
      console.log(resValue);
      this.print(resValue,'elContainer');
      this.designSrv.print(resValue,'elContainer1');
      this.designSrv.print(resValue,'elContainer2');
      
      if(res >= 7){
        this.videoSubscription?.unsubscribe();
        console.log('Video Subscription Closed');
      }
    });
  }

  print(val :string , containerId:string){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }

}
