import { Pipe, PipeTransform } from '@angular/core';
import { SharedTranslatorService } from './translator.service';

@Pipe({
  name: 'translator'
})
export class SharedTranslatorPipe implements PipeTransform {

  constructor(
    private translatorService: SharedTranslatorService
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
