import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from 'src/app/services/translator.service';

@Pipe({
  name: 'translator'
})
export class TranslatorPipe implements PipeTransform {

  constructor(
    private translatorService: TranslatorService
  ) { }

  transform(value: any, strtr?: any) {
    if (!value) return;

    let output = this.translatorService.getLanguage(value);

    if (strtr) {
      for (let key in strtr) {
        output = output.replace(RegExp(`{{${key}}}`, "g"), strtr[key]);
      }
    }

    return output;
  }

}
