import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'project', component: ProjectComponent },
  { path: 'project/show-project', component: ShowProjectComponent },
  { path: 'home', component: HomeComponent } 
  
];

@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
//export const routingComponents = [ProjectComponent, ShowProjectComponent]
