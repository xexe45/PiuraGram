import { Injectable } from '@angular/core';
import { BASE_URL } from '../../config/config';

@Injectable()
export class SubirArchivoService {
  constructor() {}

  subirArchivo(archivo: File, id: string, token: string) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append('imagen', archivo, archivo.name);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('IMAGEN SUBIDA');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Falló la subida');
            reject(xhr.response);
          }
        }
      };

      let url = BASE_URL + '/upload/usuario/' + id;
      url += '?token=' + token;

      xhr.open('PUT', url, true);
      xhr.send(formData);
    });
  }
}
