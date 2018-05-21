import { TestBed, inject } from '@angular/core/testing';

import { CreateLibroService } from './create-libro.service';

describe('CreateLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateLibroService]
    });
  });

  it('should be created', inject([CreateLibroService], (service: CreateLibroService) => {
    expect(service).toBeTruthy();
  }));
});
