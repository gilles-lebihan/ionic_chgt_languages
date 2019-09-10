import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public title: string;
  public title_2: string;
  public description: string;
  public name: string;
  public language: string;
  constructor(private _translate: TranslateService) {
    console.log("GLB constructor Tab1Page ");
  }

  ionViewDidEnter(): void {
    console.log('challa?');
    this._initTranslate();
   // this.getDeviceLanguage()
  }

  _initialiseTranslation(): void {
    console.log("GLB _initialiseTranslation Tab1Page ");
    this._translate.get('TITLE').subscribe((res: string) => {
      console.log(res);
      this.title = res;
    });
    this._translate.get('description').subscribe((res: string) => {
      console.log(res);
      this.description = res;
    });
    this._translate.get('TITLE_2', { value: 'John' }).subscribe((res: string) => {
      console.log(res);
      this.title_2 = res;
    });
    this._translate.get('data.name', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
      console.log(res);
      this.name = res;
    });

  }

  public changeLanguage(): void {
    console.log("GLB changeLanguage Tab1Page ");
    this._translateLanguage();
  }

  _translateLanguage(): void {
    console.log('language', this.language)
    this._translate.use(this.language);
    this._initialiseTranslation();
  }

  _initTranslate() {
    console.log("GLB _initTranslate Tab1Page ");
    // Set the default language for translation strings, and the current language.
    this._translate.setDefaultLang('en');

    if (this._translate.getBrowserLang() !== undefined) {
      this.language = this._translate.getBrowserLang();
      console.log('browser language is', this._translate.getBrowserLang());
    }
    else {
      // Set your language here
      this.language = 'en';
    }

    this._translateLanguage();
  }

}
