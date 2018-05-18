import { Component, OnInit } from '@angular/core';

import { LibroService } from './libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
  providers: [LibroService]
})
export class LibroComponent implements OnInit {

  constructor(private libroService: LibroService) { }

  ngOnInit() {
  }

}
