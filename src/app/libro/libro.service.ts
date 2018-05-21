import { LibroModel } from './../model/libro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LibroService {
  private libros: Array<LibroModel>;
 
  constructor(private http: HttpClient) { }

  public getLibros(): Array<LibroModel>{
    this.http.get("http://localhost:8080/getLibro").subscribe(res =>{
     this.libros= res as LibroModel[];
     console.log(this.libros);
    });
   return this.libros;
  }
}
