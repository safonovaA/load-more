import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { CatComponent } from './components/cat/cat.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CatsService } from './services/cats.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    LoadMoreComponent,
    CatComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
