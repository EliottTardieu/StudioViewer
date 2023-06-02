import { NgModule } from '@angular/core';
import {NbIconLibraries, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('font-awesome', {packClass: 'fa', iconClassPrefix: 'fa'});
    this.iconLibraries.registerFontPack('regular', {packClass: 'far', iconClassPrefix: 'fa'});
    this.iconLibraries.registerFontPack('solid', {packClass: 'fas', iconClassPrefix: 'fa'});
    this.iconLibraries.registerSvgPack('flags',
      {
        fr: '<img src="assets/images/flags/french_fr_flag.png" width="30" height="20">',
        en: '<img src="assets/images/flags/english_uk_flag.png" width="30" height="20">',
        tn: '<img src="assets/images/flags/tunisian_tn_flag.png" width="30" height="20">',
        es: '<img src="assets/images/flags/spain_es_flag.png" width="30" height="20">',
        pl: '<img src="assets/images/flags/poland_pl_flag.png" width="30" height="20">',
        nl: '<img src="assets/images/flags/dutch_du_flag.png" width="30" height="20">',
        jp: '<img src="assets/images/flags/japan_jp_flag.png" width="30" height="20">',
        de: '<img src="assets/images/flags/germany_de_flag.png" width="30" height="20">',
      });
  }
}
