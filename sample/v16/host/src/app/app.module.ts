import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoteButtonLinkComponent } from './components/remote-button-link/remote-button-link.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoteButtonLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
