import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { WelcomComponent } from './components/welcom/welcom.component';

const routes: Routes = [
  {
    path:'form',component:FormComponent
  },
  {
    path:'welcom',component:WelcomComponent
  }, {
    path:'**',redirectTo:'form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
