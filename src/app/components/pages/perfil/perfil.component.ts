import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SubirArchivoService } from '../../../services/subir-archivo/subir-archivo.service';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  imagenTemp: string;
  imagen: File;
  constructor(private toastr: ToastrService,
              public _subirArchivo: SubirArchivoService,
              public _loginService: LoginService) {}

  ngOnInit() {}

  subirArchivo() {
    this._subirArchivo.subirArchivo(this.imagen, this._loginService.usuario._id, this._loginService.token)
      .then((resp: any) => {
        this._loginService.guardarStorage(resp.usuario._id, this._loginService.token, resp.usuario);
        this.toastr.success('Tu imagen de perfil fue actualizada', 'Correcto');
      })
      .catch (err => console.log('Error en la carga'));
  }

  verImagen(archivo: File) {
    if (!archivo) {
      this.imagen = null;
      return;
    }

    if (!archivo.type.includes('image')) {
      this.toastr.error('Debes seleccionar sólo imágenes', 'Error');
      this.imagen = null;
      return;
    }

    this.imagen = archivo;
    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => (this.imagenTemp = reader.result);
  }
}
