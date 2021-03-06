import { ToArrayComponent } from './observable/to-array/to-array.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './observable/list/list.component';

const routes: Routes = [
  {path:'' , component:PromiseComponent},
  {path:'observable',component:ObservableComponent,
  children:[
    {path:'',component:ListComponent},
    {path:'fromEvent',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of-from',component:OfFromComponent},
    {path:'toArray',component:ToArrayComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
