import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  films: Array<any>;
  title: string;
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.title = 'Listado de Peliculas';
    console.log('Componente listado de peliculas cargado');
    this.getPeliculas();
  }
  getPeliculas() {
    this.peliculasService.getFilms().subscribe(
      result => {
        this.films = result.results;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
