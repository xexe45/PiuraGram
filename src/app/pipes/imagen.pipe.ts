import { BASE_URL } from './../config/config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(imagen: string, tipo: string = 'perfil'): any {
    let url = '';
    if ( tipo === 'perfil' ) {
      url = BASE_URL + '/imgprof/' + imagen;
    }
    return url;
  }
}
