import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlienTalkPipe } from './imports/alien-talk.pipe';
import { TypewriterPipe } from './imports/typewriter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlienTalkPipe,
    TypewriterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
