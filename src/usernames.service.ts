import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsernamesService {
  private antamina: string[] = [
    'Hipolito Mullisaca',
    'Edwin Morales',
    'José Domínguez Roncal',
    'Marcelo Obregón',
    'Berlioz Corpus',
    'Santiago Obregon',
    'Gilbert Quito',
    'Franklin Yopla',
    'Cesar Manya',
    'Grabiel Ruiz',
    'Osvar Gamboa',
    'Melquiades Huamaliano Baltazar',
    'Yenier Corpus Rodríguez',
    'Juan Amambal',
    'Everst Ramos Cruz',
  ];

  private cerrejon = [
    'Armando Fuentes',
    'Alcidez Amaya',
    'Jose Zabaleta',
    'Glenia Vega',
    'Rodulfo Cordoba',
    'Maria Mendoza',
    'Luis Yaguna',
    'Henry Figueroa',
    'Yadira Orozco',
    'Victor Robles',
    'Dobiana Morales',
    'Alan Mendoza',
    'Alexis Tejedor',
    'Edwin Oñate',
    'Dayana Mendoza',
    'Ricardo Jiménez',
    'Victor Murgas',
    'Manuel Perez',
    'Soporte Orica',
    'Harold Solano',
    'Bernardo Uriana',
    'Darwin Torres',
    'Jainer Carrillo',
    'Andrea Carrillo',
    'Jose Brito',
    'Mario Ramos',
    'Alex Ortiz',
    'Eduardo Guerra',
    'Jose Sarmiento',
    'Einar Oñate',
    'Pedro Caballero',
    'Edilber Baquero',
    'Campo  Pineda',
    'Ricardo Hernandez',
  ];

  private gudai = [
    'Brody R',
    'Terry H',
    'Claire M',
    'Justin B',
    'Holly B',
    'Bonnie Talbot',
    'Steven T',
    'Cass G',
    'Dan B',
    'Guest',
    'Toni M',
    'Maddi U',
    'Dylan D',
    'Nick B',
    'Peter M',
    'Caz N',
    'Orica - Simon',
    'Rose Wilkinson',
    'Orica - Lee',
    'Orica - Paula',
    'Joshua Grafham',
    'Clayton S',
    'Orica - Dan',
    'Orica - Dave',
    'Orica - Andy',
    'Orica - Byron',
    'Holly R',
    'Ray C',
    'Andrew Wright',
    'Orica - Glenn',
    'Tim N',
    'Orica - Christine',
    'Timothy N',
  ];

  private bengalla = ['Guest', 'BM219', 'BM218'];

  private btstockton = [
    'Aaron Graham',
    'Craig  Pleader',
    'Guest',
    'Jesse  Hogarth',
    'Collin  Barnard',
  ];

  usernames$ = of(this.btstockton);

  constructor() {}
}
