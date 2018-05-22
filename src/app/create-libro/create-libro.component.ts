import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { LibroModel } from '../model/libro.model';
import { CreateLibroService } from './create-libro.service';
import { OK } from '../model/httpstatus';


@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrls: ['./create-libro.component.css'],
  providers: [CreateLibroService]
})
export class CreateLibroComponent implements OnInit {

  private libro: LibroModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(private createLibroService: CreateLibroService,
  private router: Router) { 
//invoca la información
    if(sessionStorage.getItem("libro")){
      this.libro= JSON.parse(sessionStorage.getItem("libro"));

    }else{
      this.libro= new LibroModel();
    }
 
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void{
    this.isValid = this.createLibroService.validate(this.libro);

    if(this.isValid){
      this.createLibroService.saveOrUpdate(this.libro).subscribe(res=>{
if(res.respuestaCode == OK){
  this.router.navigate(['/libroComponent'])

}else{
  this.message=res.mensaje;
  this.isValid=false;
}
      });
    }else{
      this.message= "Los campos con * son obligatorios";
    }
    sessionStorage.clear();
   }


}
