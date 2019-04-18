import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpcionesService, Clima, Pronostico } from '../service/opciones.service';

@Component({
  selector: 'app-clima-capital',
  templateUrl: './clima-capital.component.html',
  styleUrls: ['./clima-capital.component.css']
})
export class ClimaCapitalComponent implements OnInit {
  clima: Clima;
  forescat: Pronostico;
  capital: string;
  error: '';
  constructor(private opcionesService: OpcionesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.capital = params['capital'];

       // Si el codigo de pais tiene un valor, buscamos las clima en forma asincrona
      if (this.capital) {
         // Obtengo el Clima de la capital
        this.opcionesService.getClima(this.capital)
          .then(data => { this.clima = data;
                          console.log(data, this.clima);
          });

        // Obtengo el pronóstico de los proximos 5 días de la capital
        this.opcionesService.getPronostico(this.capital)
        .then(d => { this.forescat = d;
                     console.log(this.forescat); })
        .catch(data => this.error = data);
      }
    });
  }

}
