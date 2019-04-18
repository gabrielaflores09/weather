import { Component, OnInit } from '@angular/core';
import {OpcionesService, Pais} from '../service/opciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  // Para Paises
  paises: Pais[];
  pais: string;

  // Info pais
  capital: string;
  name: string;
  region: string;
  subregion: string;
  flag: string;
  latlng: string;
  area: string;
  traslations: string;
  constructor( private opcionesService: OpcionesService) { }

  ngOnInit() {
    this.opcionesService.getPaises().then(d => this.paises = d);
    }

    mostrarinfo(pais) {
      this.name = pais.name;
      this.capital = pais.capital;
      this.region = pais.region;
      this.subregion = pais.subregion;
      this.flag = pais.flag;
      this.latlng = pais.latlng;
      this.area = pais.area;
      this.traslations = pais.traslations;
    }

  }
