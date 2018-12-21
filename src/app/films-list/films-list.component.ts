import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  titulo: string;
  constructor() { }

  ngOnInit() {
    this.titulo = 'Listado de Peliculas';
    console.log('Componente listado de peliculas cargado');
  }

}
