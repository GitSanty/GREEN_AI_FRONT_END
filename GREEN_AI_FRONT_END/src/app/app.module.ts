import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { AddEditProjectComponent } from './project/add-edit-project/add-edit-project.component';
import { GreenAiApiService } from './green-ai-api.service';
import { HomeComponent } from './home/home.component';
//import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ShowProjectComponent,
    AddEditProjectComponent,
    HomeComponent
    //routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [GreenAiApiService],
  bootstrap: [AppComponent]
  //bootstrap: [HomeComponent]
})
export class AppModule { }
