import { Injectable } from '@angular/core';
import { Conversao } from '../models';
import * as convertUnits from 'convert-units';

@Injectable()
export class ConversorService {

  constructor() { }

  listarTodos(type: convertUnits.Measure): any {
    const lista = convertUnits()
    .list(type)
    return lista
  }

  converter(valor: Conversao): number {
    return convertUnits(valor.valorEntrada)
    .from(valor.medidaDe)
    .to(valor.medidaPara);
  }

  grandezas(): string[] {
    return convertUnits().measures()
  }

  trocar(primeiroValor: string, segundoValor: string): string {
    return `{"novaEntrada": "${segundoValor}", "novaSaida": "${primeiroValor}"}`
  }

}
