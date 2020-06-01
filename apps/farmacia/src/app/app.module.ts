import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedComponentsModule } from '@ventas/shared/components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
