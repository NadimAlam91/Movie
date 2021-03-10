import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';

const routes: Routes = [
  {path:'',redirectTo:'movielist',pathMatch:'full'},
  {path:"movielist",component:MovieListComponent},
  {path:"update/:id",component:MovieUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
