import {LocalDataSource} from 'ng2-smart-table';
import {OnInit} from '@angular/core';
import {BasecrudService} from '../../service/basecrud.service';
import {NotificationService} from '../../@core/utils/notification.service';

export abstract class BaselistComponent<T> implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BasecrudService<T>,
              private notification: NotificationService) {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Tem certeza que deseja remover este registro ?')) {
      if (event.data.id != null) {
        this.service.remove(event.data).subscribe(
          undefined,
          httpError => {
            this.notification.showDangers(httpError.error.erros);
          },
          () => {
            this.notification.showSuccess('Removido com sucesso');
            event.confirm.resolve();
          },
        );
      }
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    this.service.update(event.newData).subscribe();
    event.confirm.resolve();
  }

  ngOnInit(): void {
    this.service.findRecords().subscribe((data: T[]) => {
      this.source.load(data);
    });
  }
}
