import {Component} from '@angular/core';
import {UnidadeService} from '../../service/unidade.service';
import {Unidade} from '../../shared/models/unidade.model';
import {BaselistComponent} from '../../shared/components/baselist.component';
import {NotificationService} from '../../@core/utils/notification.service';

@Component({
  selector: 'ngx-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.scss'],
})
export class UnidadeComponent extends BaselistComponent<Unidade> {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Código',
        type: 'number',
        editable: false,
      },
      nome: {
        title: 'Nome',
        type: 'string',
      },
      valorHora: {
        title: 'Valor Hora',
        type: 'number',
      },
      valorDemaisHoras: {
        title: 'Valor Demais Horas',
        type: 'number',
      },
      toleranciaMinutos: {
        title: 'Tolerência em Minutos',
        type: 'number',
      },
      abertura: {
        title: 'Abertura',
        type: 'Date',
      },
      fechamento: {
        title: 'Fechamento',
        type: 'Date',
      },
    },
  };

  constructor(service: UnidadeService, notification: NotificationService) {
    super(service, notification);
  }
}
