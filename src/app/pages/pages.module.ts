import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {UnidadeComponent} from './unidade/unidade.component';
import {CaixaComponent} from './caixa/caixa.component';
import {CameraComponent} from './camera/camera.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

const SAFEPARK_COMPONENTS = [
  UnidadeComponent,
  CameraComponent,
  CaixaComponent,
];

const SAFEPARK_MODULES = [
  Ng2SmartTableModule,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    ...SAFEPARK_MODULES,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ...SAFEPARK_COMPONENTS,
  ],
})
export class PagesModule {
}
