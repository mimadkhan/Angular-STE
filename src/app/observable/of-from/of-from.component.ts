import { DesignService } from 'src/app/service/design.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg: any;
  constructor(private designSrv:DesignService) { }

  ngOnInit(): void { 
    // Of Example
    const obs1 = of('Muhammad','Imad','Khan');
    obs1.subscribe((res)=>{
      console.log(res);
      this.designSrv.print(res,'elContainer');
    });
    let obj = {a:'Muhammad',b:'Imad',c:'Khan'};
    const obs2 = of(obj);
    obs2.subscribe((res)=>{
      this.obsMsg = res;
      console.log('obsMsg => ' , res);
      // this.designSrv.print(res,'elContainer2');
    });
    //emits values of any type
    const source = of({a:'Muhammad',b:'Imad',c:'Khan'},{ name: 'Brian' },['shah','ahmad','ali'], [1, 2, 3], function hello() {
      return 'Hello';
    });
    //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log(val));

    //From Example
    // const obs3 = from()
  }



}
