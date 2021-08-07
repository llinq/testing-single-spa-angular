import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsPipe } from './assets/assets.pipe';
import { TranslatorPipe } from './translator/translator.pipe';

@NgModule({
  declarations: [
    AssetsPipe,
    TranslatorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AssetsPipe,
    TranslatorPipe
  ]
})
export class PipesModule { }
