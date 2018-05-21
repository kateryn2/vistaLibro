import { Component, OnInit } from '@angular/core';
import { LibroModel } from './../model/libro.model';

import { LibroService } from './libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
  providers: [LibroService]
})
export class LibroComponent implements OnInit {
  private libros: Array<LibroModel>;
  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.loadLibro();
  }
  
  private loadLibro(): void {
this.libroService.getLibros().subscribe(res=>{
  this.libros = res;

});
   
  }
}
