import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: '*/',
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
