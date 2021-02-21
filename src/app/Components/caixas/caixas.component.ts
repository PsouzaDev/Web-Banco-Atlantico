import { Component, OnInit } from '@angular/core';
import { Caixas } from 'src/app/model/caixas';

@Component({
  selector: 'app-caixas',
  templateUrl: './caixas.component.html',
  styleUrls: ['./caixas.component.css']
})
export class CaixasComponent implements OnInit {
  caixas: Caixas[] = [
    {id:'2v/Y2GtNHhwtnoTVa4lyAcDyT+IyEAbOLyMDXjRVYbA=',
    saldo:8700,
    status: false,
    dois: 100,
    cinco: 100,
    dez: 100,
    vinte: 100,
    cinquenta: 100
   },
   {id:'2v/Y2GtNHhwtnoTVa4lyAcDyT+IyEAbOLyMDXjRVYbA=',
    saldo:8700,
    status: true,
    dois: 100,
    cinco: 100,
    dez: 100,
    vinte: 100,
    cinquenta: 100
   },
   {id:'2v/Y2GtNHhwtnoTVa4lyAcDyT+IyEAbOLyMDXjRVYbA=',
    saldo:8700,
    status: true,
    dois: 100,
    cinco: 100,
    dez: 100,
    vinte: 100,
    cinquenta: 100
   },
   {id:'2v/Y2GtNHhwtnoTVa4lyAcDyT+IyEAbOLyMDXjRVYbA=',
    saldo:8700,
    status: true,
    dois: 100,
    cinco: 100,
    dez: 100,
    vinte: 100,
    cinquenta: 100
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
