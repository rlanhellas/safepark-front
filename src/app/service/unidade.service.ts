import {Injectable} from '@angular/core';
import {Unidade} from '../shared/models/unidade.model';
import {BasecrudService} from './basecrud.service';
import {HttpClient} from '@angular/common/http';
import {Adapter} from '../shared/adapter/adapter';

@Injectable({
  providedIn: 'root',
})
export class UnidadeService extends BasecrudService<Unidade> {

  constructor(http: HttpClient, adapter: Adapter<Unidade>) {
    super(http, adapter);
  }

  getPrefixURL(): string {
    return 'unidades';
  }

}
