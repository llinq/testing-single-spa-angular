import { Pipe, PipeTransform } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Pipe({
  name: 'assets'
})
export class AssetsPipe implements PipeTransform {

  transform(value: string): unknown {
    return assetUrl(value);
  }

}
