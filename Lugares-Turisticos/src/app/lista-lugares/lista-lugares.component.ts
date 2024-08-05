import { Component, inject, OnInit } from '@angular/core';
import { ElementoLugarComponent } from '../elemento-lugar/elemento-lugar.component';
import { Lugar } from '../modelos/lugar.interface';
import { LugarService } from '../servicios/lugar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-lugares',
  standalone: true,
  imports: [ElementoLugarComponent, RouterLink],
  templateUrl: './lista-lugares.component.html',
  styleUrl: './lista-lugares.component.css'
})
export class ListaLugaresComponent implements OnInit{
  private lugarService : LugarService = inject(LugarService);
  
  lugares: Lugar[] = [];
  
  ngOnInit(): void {
    this.lugares = this.lugarService.listarLugares();
  }
}
