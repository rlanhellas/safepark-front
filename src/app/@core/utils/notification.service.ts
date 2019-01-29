import {Injectable} from '@angular/core';
import {NbToastrService} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(private toastr: NbToastrService) {
  }

  showInfo(message: string, title: string = 'Informação') {
    this.toastr.info(message, title);
  }

  showDangers(message: string[], title: string = 'Erro') {
    message.forEach(m => this.showDanger(m));
  }

  showDanger(message: string, title: string = 'Erro') {
    this.toastr.danger(message, title);
  }


  showWarn(message: string, title: string = 'Alerta') {
    this.toastr.warning(message, title);
  }

  showSuccess(message: string, title: string = 'Sucesso') {
    this.toastr.success(message, title);
  }
}
