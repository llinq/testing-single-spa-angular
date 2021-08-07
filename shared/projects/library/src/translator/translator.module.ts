import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { SharedTranslatorService } from "dist/library/public-api";
import { SharedTranslatorModel } from "./translator.model";
import { SharedTranslatorPipe } from "./translator.pipe";

@NgModule({
  declarations: [
    SharedTranslatorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedTranslatorPipe
  ],
  providers: [
    SharedTranslatorService
  ]
})
export class SharedTranslatorModule {
  static forRoot(config: SharedTranslatorModel): ModuleWithProviders<SharedTranslatorModule> {
    return {
      ngModule: SharedTranslatorModule,
      providers: [
        { provide: 'config', useValue: config }
      ]
    };
  }
}
