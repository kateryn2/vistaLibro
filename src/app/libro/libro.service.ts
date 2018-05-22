import { LibroModel } from './../model/libro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LibroService {
 
  constructor(private http: HttpClient) { }

  public getLibros():Observable<LibroModel[]>{
    
   return this.http.get<LibroModel[]>("http://localhost:8080/getLibro");
  }
  public DeleteLibro(libro: LibroModel):void{
   this.http.post("http://localhost:8080/DeleteLibro",JSON.stringify( libro)).subscribe();
  }

}
