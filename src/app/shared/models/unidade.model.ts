export class Unidade {
  id: number;
  valorHora: number;
  valorDemaisHoras: number;
  toleranciaMinutos: number;
  abertura: Date;
  fechamento: Date;
  nome: string;

  constructor(id: number, valorHora: number, valorDemaisHoras: number, toleranciaMinutos: number,
              abertura: Date, fechamento: Date, nome: string) {
    this.id = id;
    this.valorHora = valorHora;
    this.valorDemaisHoras = valorDemaisHoras;
    this.toleranciaMinutos = toleranciaMinutos;
    this.abertura = abertura;
    this.fechamento = fechamento;
    this.nome = nome;
  }
}
