import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpcionesService {
    constructor(private http: Http) { }

    private static PAISES_URL = 'https://restcountries.eu/rest/v2/all';

    getPaises(): Promise<Pais[]> {
        return this.http.get(OpcionesService.PAISES_URL)
            .toPromise()
            .then(response => response.json() as Pais[])
            .catch(this.handleError);
    }

    // Obtiene las ciudades en forma asincrona, devuelve una promesa
    getClima(capital: string) {
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=f91dd554ac3ea854703161b86b72fa0a`;
          return this.http.get(url)
          .toPromise()
          .then(response => response.json() as Clima)
          .catch(this.handleError);
      }

    getPronostico(capital: string): Promise<Pronostico> {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${capital}&APPID=f91dd554ac3ea854703161b86b72fa0a`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Pronostico)
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('Ocurrió un error', error);
        return Promise.reject(error.message || error);
    }
}

export interface Pais {
    name: string;
    alpha2Code: string;
    alpha3Code: string;
    latlng: string;
    capital: string;
    flag: string;
    region: string;
    subregion: string;
    area: string;
}
export interface Clima {
    coord: {
        lon: number,
        lat: number
      };
      weather: {
          main: string,
          icon: string
      };
      main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number,
      };
      visibility: number;
      wind: {
        speed: number,
      };
      clouds: {
        all: number
      };
      dt: number;
      sys: {
        country: string,
      };
      name: string;
  }

export interface Pronostico {
    list: {
        main: {
          temp_min: number, // medido en Kelvin
          temp_max: number,
          humidity:	number  // medido en %
        },
       weather: {
          main:	string, // el clima
          icon:	string,
       },
        wind: {
         speed: string;
        },
      dt_txt:	string; // "2018-05-28 06:00:00"
    }[];
    city: {
      name: string
    };
}
