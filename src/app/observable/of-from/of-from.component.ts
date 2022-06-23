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
    const obs = of('Muhammad','Imad','Khan');
    obs.subscribe((res)=>{
      console.log(res);
      this.designSrv.print(res,'elContainer');
    });

    let obj = {a:'Muhammad',b:'Imad',c:'Khan'};
    const obs1 = of(obj);
    obs1.subscribe((res)=>{
      this.obsMsg = res;
      console.log('obsMsg => ' , res);
    });

    // of : Emit the whole array at once. For example
    let obj1 = ['Muhammad','Imad','Khan'];
    const obs2 = of(obj1);
    obs2.subscribe((res:any)=>{
      console.log(res);
      this.designSrv.print(res,'elContainer2');
    });

         // NOTE: of operator can behave as from operator with spread operator
      of(...obj1).subscribe(res=>{
        console.log(res)
      })

    //emits values of any type
    const source = of({a:'Muhammad',b:'Imad',c:'Khan'},{ name: 'Brian' },['shah','ahmad','ali'], [1, 2, 3], function hello() {
      return 'Hello';
    });

    //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log(val));

    //From Example 
    // Array
    // from : Emit the items one by one of array. For example
    const obs3 = from(['Wasif','Ahmad','Ali']);
    obs3.subscribe((res)=>{
      console.log(res);
      this.designSrv.print(res,'elContainer3');
    });

    // Promise
    const promise = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve('Promise resolve');
      },3000);
    });
    // promise.then(res=>{
    //   console.log(res);
    // });
    const obs4 = from(promise);
    obs4.subscribe((res)=>{
      console.log('from Promise => ',res)
      this.designSrv.print(res,'elContainer4');
    });

    // String 
    const obs5 = from('WelCome to RXJS Series');
    obs5.subscribe((res)=>{
      console.log(res);
      this.designSrv.print(res,'elContainer5');
    });
  }



}
