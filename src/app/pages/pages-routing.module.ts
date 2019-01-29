import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {UnidadeComponent} from './unidade/unidade.component';
import {CameraComponent} from './camera/camera.component';
import {CaixaComponent} from './caixa/caixa.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'unidades',
    component: UnidadeComponent,
  }, {
    path: 'cameras',
    component: CameraComponent,
  }, {
    path: 'caixas',
    component: CaixaComponent,
  }, {
    path: '',
    redirectTo: 'unidades',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
