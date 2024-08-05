import { Injectable } from '@angular/core';
import { Lugar } from '../modelos/lugar.interface';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

   lugares: Lugar[] = [
  {
    nombre: "Plaza Bolivar de Pereira", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRy5ZWjAv3ZJ2mj4BpRdJP2aDIn-NUz5_pZA&s",
    descripcion: "Es el parque principal de Pereira y lugar del símbolo más importante de la ciudad, el Bolívar Desnudo, obra del maestro Rodrigo Arenas Betancur que llegó a la localidad en el año de 1963. Se ubica en el centro de la ciudad, entre las carreras 7a.",
    categorias: ["Cultura", "Ajedrez"], 
    visitado: true

  },
  {
    nombre: "Coveñas", 
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUYejRJX-ukUym6Eriq4eR1tRUbjQQvNmkIg&s",
    descripcion: "Coveñas es una ciudad turística del Golfo de Morrosquillo en el norte de Colombia. Es conocida por sus largas playas con aguas tranquilas y poco profundas. La playa Primera Ensenada es un centro de deportes acuáticos.",
    categorias: ["Playa", "Pesca", "Ocio"], 
    visitado: false
  }, 
  {
    "nombre": "Machu Picchu",
    "imagen": "https://www.incatrailmachu.com/img/machu-picchu-02-011.jpg",
    "descripcion": "Machu Picchu es una antigua ciudad inca situada en las montañas de los Andes en Perú, conocida por su impresionante arquitectura y paisajes.",
    "categorias": ["Arqueología", "Montaña", "Historia"],
    visitado: false
  }, 
  {
    nombre: "París",
    imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1",
    descripcion: "París es la capital de Francia, famosa por sus monumentos históricos, museos y cultura vibrante.",
    categorias: ["Cultura", "Historia", "Gastronomía"], 
    visitado: false
  }   
  ];

  constructor() { }

  listarLugares(): Lugar[] {
    return this.lugares;
  }

  agregarLugar(lugar: Lugar){
    this.lugares.push(lugar);
  }

  marcarVisitado(lugar: Lugar){
    lugar.visitado = true;
  }


}
