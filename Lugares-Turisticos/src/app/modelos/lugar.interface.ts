export interface Lugar {
    nombre: string;
    imagen: string;
    descripcion?: string;
    categorias: string[];
    visitado: boolean;
}