import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { MyservicesComponent } from './shared/common/myservices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MyservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Abid Saad App',
      maxAge: 45,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
