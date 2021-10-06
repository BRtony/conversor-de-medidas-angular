import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Measure } from 'convert-units';
import { Conversao } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'app-convert-units',
  templateUrl: './convert-units.component.html',
  styleUrls: ['./convert-units.component.css'],
})
export class ConvertUnitsComponent implements OnInit {
  medidas: any;
  conversao: Conversao = new Conversao('m', 'mm');
  tipos?: string[];
  tipo: Measure = 'length';

  @ViewChild('conversaoForm', { static: true })
  conversaoForm?: NgForm;

  constructor(private conversaoService: ConversorService) {}

  ngOnInit(): void {
    this.listarTipos();
    this.tipo;
    this.listarUnidades();
  }

  listarTipos(): void {
    this.tipos = this.conversaoService.grandezas();
  }

  listarUnidades(): void {
    this.medidas = this.conversaoService.listarTodos(this.tipo);
    this.conversao.medidaDe = this.medidas[0].abbr;
    this.conversao.medidaPara = this.medidas[1].abbr;
  }

  converter(): void {
    this.conversao.valorSaida = this.conversaoService.converter(this.conversao);
  }

  trocarUnidade(): void {
    const { novaEntrada, novaSaida } = JSON.parse(
      this.conversaoService.trocar(
        this.conversao.medidaDe,
        this.conversao.medidaPara
      )
    );
    this.conversao.medidaDe = novaEntrada;
    this.conversao.medidaPara = novaSaida;
  }

  trocarValor(): void {
    this.conversao.valorEntrada = this.conversao.valorSaida;
  }
}
