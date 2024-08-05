import { Component,  Input,  inject } from '@angular/core';
import { Lugar } from '../modelos/lugar.interface';
import { LugarService } from '../servicios/lugar.service';


@Component({
  selector: 'app-elemento-lugar',
  standalone: true,
  imports: [],
  templateUrl: './elemento-lugar.component.html',
  styleUrl: './elemento-lugar.component.css'
})
export class ElementoLugarComponent {

  private lugarService : LugarService = inject(LugarService);
  
  @Input() item!: Lugar;

  marcarVisitado() {
    this.lugarService.marcarVisitado(this.item);
  }
}
