import { Inject, Injectable } from '@angular/core';

declare const require: any;

@Injectable({
  providedIn: 'root'
})
export class SharedTranslatorService {
  private prefix = 'multi-language';
  // private rtlLangs = ['pt-BR', 'en-US'];
  private languagesObject: any;

  private html = document.getElementsByTagName('html')[0];
  public lang: any;
  public dir: any;

  constructor(@Inject('config') private config: any) {
      if (this.config.storagePrefix) {
          this.prefix = `${this.config.storagePrefix}-language`
      }

      this.lang = localStorage.getItem(this.prefix) || this.config.defaultLang || 'pt-BR';
      this.setLanguage(this.lang);
  }

  setLanguage(value: any) {
      this.lang = value;
      localStorage.setItem(this.prefix, value);
      this.languagesObject = require(`./i18n/${value}.json`);
      // this.dir = this.rtlLangs.indexOf(value) !== -1 ? 'rtl' : 'ltr';
      this.dir = 'ltr';
      this.html.setAttribute('dir', this.dir);
      this.html.setAttribute('lang', this.lang);
  }

  getLanguage(key: any) {
      try {
          return this.languagesObject[key];
      } catch (error) {
          console.error(error);
      }
  }
}