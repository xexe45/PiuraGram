import { BASE_URL } from './../config/config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(imagen: string, tipo: string = 'perfil'): any {
    let url = BASE_URL + '/img/';
    if ( tipo === 'perfil' ) {
      url += imagen;
    }

    if ( tipo === 'posts' ) {
      url += 'post/' + imagen;
    }
    return url;
  }
}
