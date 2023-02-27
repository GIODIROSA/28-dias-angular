import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './share/button/button.component';
import { NotImageDirective } from './not-image.directive';
import { FromNewItemComponent } from './share/from-new-item/from-new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NotImageDirective,
    FromNewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
