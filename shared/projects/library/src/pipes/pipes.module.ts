import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAssetsPipe } from './assets/assets.pipe';

@NgModule({
  declarations: [
    SharedAssetsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedAssetsPipe
  ]
})
export class SharedPipesModule { }
