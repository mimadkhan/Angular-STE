import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  
  promiseVal: any;

  ngOnInit(): void {
    // let buyLaptop = new Promise(function(resolve,reject){
    // });
    let buyLaptop = new Promise((resolve,reject)=>{
      // resolve('promise is resolve');
      // reject('promise is reject');
      if(this.DellAvailable()){
        setTimeout(()=>{
          // resolve('Dell is purchased');
          resolve(this.Dell);
        },3000)
      }
      else if(this.HpAvailable()){
        setTimeout(()=>{
          // resolve('Hp is purchased');
          resolve(this.Hp);
        },3000)
      }
      else{
        setTimeout(()=>{
          // reject('Laptop is not available');
          reject(this.notAvil);
        },3000)
      }
    });
    buyLaptop.then((res)=>{
      console.log('then Code => ',res);
      this.promiseVal=res;
    }).catch((res)=>{
      console.log('catch Code => ',res);
      this.promiseVal=res;
    })
  }
  DellAvailable(){
   return true;
  }
  HpAvailable(){
   return false;
  }
  Dell={
    brand : 'Dell',
    hardDisk : '2TB',
    color : 'Black'
  }
  Hp={
    brand : 'Hp',
    hardDisk : '3TB',
    color : 'White'
  }
  notAvil={
    brand : 'not Available',
    status : 'Failed'
  }
  // myFunction(){
  //   console.log('my function called')
  // }
}
