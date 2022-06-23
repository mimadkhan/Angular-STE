import { DesignService } from 'src/app/service/design.service';
import { interval, Subscription, of, from } from 'rxjs';
import { toArray , take } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  subscription!:Subscription;
   list:any[]=[];
   user = [
    {name:'Muhammad',rollNo:101,skill:'Web Development'},
    {name:'Ali',rollNo:102,skill:'Desktop Development'},
    {name:'Ahmad',rollNo:103,skill:'Mobile Development'},
    {name:'Saqib',rollNo:104,skill:'Game Development'}
  ];
  constructor(private designSrv:DesignService) { }

  ngOnInit(): void {
    // Example 01
    const source = interval(1000);
    this.subscription = source.pipe(take(5),toArray())
    .subscribe((res)=>{
      this.list = res;
      console.log(this.list);
      // if(res >= 7){
      //   this.subscription.unsubscribe();
      //   console.log('Subscription Unsubscribe');
      // }
    });

    // Example 02
    let source2 = from(this.user);
    source2.pipe(toArray()).subscribe((res)=>{
      // console.log('convert array to observable streame',res);
      console.log('convert observable streame to array',res);
    });

    // Example 03 
    let source3 = of('Saud','Shahab','Nasir','Waqas');
    source3.pipe(toArray()).subscribe((res)=>{
       // console.log('convert array to observable streame',res);
       console.log('convert observable streame to array',res);
    })
  }
  
}
