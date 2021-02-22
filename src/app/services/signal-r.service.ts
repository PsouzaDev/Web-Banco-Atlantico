import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private emitterSubject = new BehaviorSubject([]);
  public onSelected = this.emitterSubject.asObservable();
  data: any;
  private hubconnection!: signalR.HubConnection;

  public startConnection = () => {
    this.hubconnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/hub/caixa')
    .build();

    this.hubconnection
    .start()
    .then(() => console.log('conexão iniciou') )
    .catch(err => console.log('erro ao iniciar conexão: '+ err ))
  }

  public addAtualizacaoCaixaListener = () => {
    this.hubconnection.on('atualizacaoCaixa', (data) =>{
      this.data = data;
      console.log(data);
      this.selectItem(data);
    })
  }

  public selectItem(item: any): void {
    this.emitterSubject.next(item);
  }
}
