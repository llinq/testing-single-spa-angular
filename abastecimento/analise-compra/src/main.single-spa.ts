import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<analise-compra-root />',
  Router,
  NavigationStart,
  NgZone,
  AnimationEngine,
  domElementGetter: domEleGetter
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

function domEleGetter() {
  // Make sure there is a div for us to render into

  let el = document.getElementById('main-content');

    // setInterval(() => {
    //   console.log(document);
    // }, 1000)

  if (!el) {
    el = document.createElement('div');
    el.id = 'main-content';
    document.body.appendChild(el);
  }

  return el;
}
