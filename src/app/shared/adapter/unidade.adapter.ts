import {Adapter} from './adapter';
import {Unidade} from '../models/unidade.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnidadeAdapter implements Adapter<Unidade> {
  adapt(item: any): Unidade {
    return new Unidade(
      item.id,
      item.valorHora,
      item.valorDemaisHoras,
      item.toleranciaMinutos,
      item.abertura,
      item.fechamento,
      item.nome);
  }
}
