import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { CaixaId } from 'src/app/model/caixaId';
import { Caixas } from 'src/app/model/caixas';
import { CaixasService } from 'src/app/services/caixas.service';
import { SignalRService } from 'src/app/services/signal-r.service';

@Component({
  selector: 'app-caixas',
  templateUrl: './caixas.component.html',
  styleUrls: ['./caixas.component.css']
})
export class CaixasComponent implements OnInit {

  caixas: Caixas[] = [];

  constructor(public signalRservice: SignalRService,
    private caixasService: CaixasService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.signalRservice.onSelected.subscribe((itens: any) => {
      if (itens) {

        // arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
        this.caixas = this.caixas.map(caixa => (itens.id === caixa.id) ? itens : caixa);
        //        this.caixas.forEach(caixa => (caixa.id === itens.id) ? caixa = itens : caixa = caixa);
        this.changeDetectorRefs.detectChanges();

      }
    });
    this.getCaixas();
    this.signalRservice.startConnection();
    this.signalRservice.addAtualizacaoCaixaListener();
  }

  getCaixas() {
    this.caixasService.getCaixas()
      .subscribe((res) => {
        console.log(res);
        this.caixas = res;
      });
  }

  onChange($event: MatSlideToggleChange, id: string) {
    const caixaId: CaixaId ={idCaixa: id}
    
    this.caixasService.updateCaixa(caixaId).subscribe((res) => {

      if (res === true) {
        this.caixas.forEach(caixa => (caixa.id === id) ? caixa.status = $event.checked : caixa.status = caixa.status);
        console.log($event.checked, id);
      }

    });
  }

}
