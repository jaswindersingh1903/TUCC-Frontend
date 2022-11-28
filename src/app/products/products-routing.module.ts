import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent} from './components/view/view.component'; 
import { EditComponent} from './components/edit/edit.component'; 
import { AddComponent} from './components/add/add.component'; 
import { IndexComponent} from './components/index/index.component'; 

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'indx',
    component: IndexComponent,
  },
  {
    path:'',redirectTo:'view',pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
