import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-ufpso',
  templateUrl: 'footer-ufpso.html'
})
export class FooterUfpsoComponent {

  @Input() set imagen(imagen: string) {
    if (imagen) {
      console.log(imagen);
    }
  };

  constructor() {}

}
