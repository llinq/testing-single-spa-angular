import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { EmptyRouteComponent } from './modules/empty-route/empty-route.component';
import { TranslatorModule } from './modules/translator/translator.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    PipesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    TranslatorModule.forRoot({
      defaultLang: 'pt-BR',
      storagePrefix: 'multi-language'
    })
  ],
  exports: [
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
