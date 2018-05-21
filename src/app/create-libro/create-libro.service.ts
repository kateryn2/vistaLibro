import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { RespuestaRest } from '../model/respuestaRest.model';
import { LibroModel } from '../model/libro.model';

@Injectable({
  providedIn: 'root'
})
export class CreateLibroService {

  constructor(private http:HttpClient) { }

  /**
   * Metodo de validación de campos
   * @param libro 
   */
  public validate(libro: LibroModel): boolean {
    let isValid= true;

    
    if (!libro.costolibro){
      isValid = false;
    }
   return isValid;
  }

  public saveOrUpdate(libro: LibroModel): Observable<RespuestaRest>{
   return this.http.post<RespuestaRest>("http://localhost:8080/saveOrUpdate",JSON.stringify( libro));
  }
 
}
