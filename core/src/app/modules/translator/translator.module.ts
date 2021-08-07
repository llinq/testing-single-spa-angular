import { ModuleWithProviders, NgModule } from "@angular/core";
import { TranslatorModel } from "src/app/models/translator.model";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
    declarations: [],
    imports: [PipesModule],
    exports: [PipesModule]
  })
  export class TranslatorModule {
    static forRoot(config: TranslatorModel): ModuleWithProviders<TranslatorModule> {
      return {
        ngModule: TranslatorModule,
        providers: [
          { provide: 'config', useValue: config }
        ]
      };
    }
  }
  