import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { map, first, switchMap } from "rxjs/operators";
import { AbstractControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioSevice: NovoUsuarioService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.novoUsuarioSevice.verificaUsuarioExistente(nomeUsuario)
      ),
      map((usuarioExiste) => 
        usuarioExiste ? { usuarioExistente: true} : null
      ),
      first()
    )
    }
  }
}
