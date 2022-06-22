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
    {path:'fromEvent',component:FromEventComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
