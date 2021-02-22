import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CaixaId } from '../model/caixaId';
import { Caixas } from '../model/caixas';

@Injectable({
  providedIn: 'root'
})
export class CaixasService {

  constructor(private httpClient: HttpClient) { }

  public getCaixas(){

    return this.httpClient.get<Caixas[]>(`https://localhost:5001/BancoAtlantico/Caixas`);
  }

  public updateCaixa(caixaId: CaixaId){

    return this.httpClient.patch(`https://localhost:5001/BancoAtlantico/Status/${caixaId.idCaixa}`,caixaId);
  }
}
