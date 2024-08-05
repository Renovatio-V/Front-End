# Proyecto Frontend: Tarjetas de Lugares

## Descripción del Proyecto

Este proyecto frontend permite a los usuarios agregar y visualizar tarjetas de lugares. Cada tarjeta puede mostrar una imagen, un nombre, una descripción y etiquetas relacionadas. La aplicación está construida utilizando Angular y está diseñada para ser sencilla y fácil de usar.

## Requisitos del Sistema

- **Angular CLI**: 18.1.3
- **Node**: 22.4.1
- **Gestor de Paquetes**: npm 10.8.1
- **Sistema Operativo**: Windows 64 bits
- npm i bootstrap@5.3.3
- npm i bootstrap-icons

## Componentes Principales

### Componente `AgregarLugarComponent`

Este componente permite a los usuarios agregar nuevos lugares a la lista.

### Componente `ElementoLugarComponent`

Este componente representa una tarjeta de lugar individual, mostrando los detalles del lugar y permitiendo marcarlo como visitado.

### Componente `ListaLugaresComponent`

Este componente muestra la lista de todas las tarjetas de lugares agregadas por el usuario.

## Servicios

### `LugarService`

Este servicio maneja la lógica de negocio relacionada con los lugares, como agregar nuevos lugares, listar todos los lugares y marcar un lugar como visitado.

## Capturas de Pantalla
![image](https://github.com/user-attachments/assets/d72b861a-bdd8-4c78-8dbc-c0ab20e39fa9)


## Estructura de Archivos

> **Nota**: Este repositorio solo contiene los archivos de la carpeta `src`.

- **src/app/agregar-lugar/agregar-lugar.component.ts**: Componente para agregar nuevos lugares.
- **src/app/elemento-lugar/elemento-lugar.component.ts**: Componente para mostrar una tarjeta de lugar individual.
- **src/app/lista-lugares/lista-lugares.component.ts**: Componente para mostrar la lista de todas las tarjetas de lugares.
- **src/app/servicios/lugar.service.ts**: Servicio que maneja la lógica de negocio de los lugares.
- **src/app/modelos/lugar.interface.ts**: Interfaz que define la estructura de un lugar.

