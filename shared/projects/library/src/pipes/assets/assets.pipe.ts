import { Pipe, PipeTransform } from '@angular/core';
import { SharedSingleSpaService } from '../../services/single-spa.service.ts';

@Pipe({
  name: 'assets'
})
export class SharedAssetsPipe implements PipeTransform {

  constructor(
    private singleSpaService: SharedSingleSpaService
  ) { }

  transform(value: string): unknown {
    return this.singleSpaService.assetUrl(value);
  }

}
