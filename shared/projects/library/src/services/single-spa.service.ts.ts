import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedSingleSpaService {

  constructor() { }

  assetUrl(url: string): string {
    // @ts-ignore
    const publicPath = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
    // const urlPrefix = url.startsWith('/') ? '' : '/';
    const urlPrefix = '';

    return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
  }

}
