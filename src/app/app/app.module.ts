import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './_services/user.service';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatCard } from "@angular/material";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    CountryDetailComponent
    
  ],
  imports: [    
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,        
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
