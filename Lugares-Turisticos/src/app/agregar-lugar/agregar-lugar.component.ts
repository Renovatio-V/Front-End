import { LowerCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lugar } from '../modelos/lugar.interface';
import { LugarService } from '../servicios/lugar.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-lugar',
  standalone: true,
  imports: [ LowerCasePipe, FormsModule, RouterLink ],
  templateUrl: './agregar-lugar.component.html',
  styleUrl: './agregar-lugar.component.css'
})
export class AgregarLugarComponent {
  categorias: string[] = [ "Cultura", "Playa", "Ocio", "Restaurantes", "Accesibilidad"];

  lugarService : LugarService = inject(LugarService);
  private router: Router = inject(Router);
  



  titulo: string = '';
  url_imagen: string = '';
  descripcion: string = '';
  categorias_datos: boolean[] = [false, false, false, false, false];

  agregarLugar(){
    const lugar: Lugar = {
      nombre: this.titulo,
      imagen: this.url_imagen,
      descripcion: this.descripcion,
      categorias: [], 
      visitado: false
    }


    for(let index = 0; index < this.categorias_datos.length; index++){
        if(this.categorias_datos[index]){
          lugar.categorias.push(this.categorias[index]);
        }
    } 
    
    this.lugarService.agregarLugar(lugar);
    this.router.navigateByUrl("/");
    
  }

}
