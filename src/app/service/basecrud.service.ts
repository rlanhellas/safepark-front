import {HttpClient} from '@angular/common/http';
import {Adapter} from '../shared/adapter/adapter';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

export abstract class BasecrudService<T> {

  constructor(private http: HttpClient, private adapter: Adapter<T>) {
  }

  abstract getPrefixURL(): string;

  findRecords(): Observable<T[]> {
    return this.http.get(`${environment.apiUrl}/${this.getPrefixURL()}/pagina/0`).pipe(
      map((data: any) => data.registros.map(item => this.adapter.adapt(item))),
    );
  }

  update(record: T): Observable<T> {
    return this.http.put(`${environment.apiUrl}/${this.getPrefixURL()}/`, record).pipe(
      map((data: any) => this.adapter.adapt(data.resultado)),
    );
  }

  remove(record: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${this.getPrefixURL()}/id/${record.id}`);
  }
}
