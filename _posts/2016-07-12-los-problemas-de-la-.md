---
title: Los problemas de la forma tradicional de escribir CSS. 
layout: post
category : software
tags : [css,frontend,web]
published: false
---
{% include JB/setup %}

Quienes hayan trabajado en proyectos no triviales que usen CSS, con seguridad habrán notado que con el tiempo las hojas de estilo inevitablemente se salen de control. Estos son algunos de los síntomas del problema. Cuáles pueden identificar en sus proyectos? :

- Fragilidad: Si se quiere hacer un ajuste, hay un alto riesgo de dañar algo más en otra parte de la aplicación. Esto genera el siguiente problema.
- Se prefiere crear clases nuevas cada vez que se necesite ajustar los estilos. No se modifican las clases existentes por miedo a dañar algo más en la página. 
- El css se "siente" desordenado. Para saber que ocurre visualmente con algún elemento hay que revisar con atención distintas líneas del CSS.

## Tal vez lo que hemos aprendido sobre organización de CSS no sea correcto.

La forma como escribimos el CSS parte de unas ideas establecidas que en teoría suenan bien. Pero en la práctica no funcionan bien. Es necesario abordar los siguientes puntos con mente abierta, pues pueden ir en contra de lo que nos han dicho son "buenas prácticas"

### Concepto problemático 1: Crear clases cuyo nombre representa un concepto de nuestra aplicación

Uno de los principios que suelen considerarse buena práctica es el de nombrar nuestras clases con conceptos de nuestra aplicación. Bajo este principio debemos nombrar nuestras clases de tal manera que representen una entidad del dominio del problema. Ya veremos los inconvenientes de esta aproximación.

Algunos ejemplos de clases nombradas de esta manera:

- formulario
- formulario-cliente
- panel-noticias
- panel-noticias-2

En el html tendriamos algo así:

```html
<div class="contenedor" >
    <form class="formulario formulario-cliente">
        <input type="text" ...>
        <button id="..."> </button>
    </form>
    <form class="formulario formulario-empresa">
        <input type="text" ...>
        <button id="..."></button>
    </form>
</div>
```

En nuestro CSS tendriamos algo así

```css
    .contenedor {
        /* reglas que aplican a los contenedores */
    }

    .contenedor .formulario-cliente {
        /* reglas que aplican a ciertos elementos
           descendientes de .contenedor con clase .formulario-cliente
        */
    }
    .formulario button {
        /* Estilo de botones que pertenecen a botón */
    }
    
    .formulario-cliente {
        /* reglas que aplican a todos los elementos .formulario-cliente */
    }

    .formulario-cliente button {
        /* Estilo de botones que pertenecen a .formulario-cliente*/
    }

```


**¿ Cuál es el problema con el enfoque del ejemplo anterior ?**




## El "Cascade" de CSS es peligroso.





