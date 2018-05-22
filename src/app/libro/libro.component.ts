import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
  constructor(private libroService: LibroService, private router: Router ) { }

  ngOnInit() {
    this.loadLibro();
  }
  
  private loadLibro(): void {
this.libroService.getLibros().subscribe(res=>{
  this.libros = res;

});
   
  }

  public edit(libro: LibroModel):void{
    sessionStorage.setItem('libro', JSON.stringify(libro));
    this.router.navigate(['/createLibroComponent']);
  }

  public delete(libro: LibroModel):void{
    this.libroService.DeleteLibro(libro);
  }
}
