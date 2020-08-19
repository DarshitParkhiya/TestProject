import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeModule } from '@my-org/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  imports: [
    FormsModule,
    BrowserModule,
    ThemeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
