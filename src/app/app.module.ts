import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewComponent } from './components/CRUD/view/view.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/CRUD/create/create.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [			
    AppComponent,
      DashboardComponent,
      ViewComponent,
      CreateComponent,
      LoginComponent,
      SidebarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
