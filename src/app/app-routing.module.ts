import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatComponent } from './components/cat/cat.component';


const routes: Routes = [
  { path: 'cats', component: CatsListComponent },
  { path: 'cats/:id', component: CatComponent },
  { path: '',
    redirectTo: '/cats',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
