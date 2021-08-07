import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './modules/empty-route/empty-route.component';
// @ts-ignore
import { SharedTranslatorModule } from '@mtcorp/shared';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // CoreModule,
    SharedTranslatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
