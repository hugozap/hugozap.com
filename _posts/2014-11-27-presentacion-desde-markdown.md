---
layout: post
category : random
tags : [unix,markdown]
title: Markdown para presentaciones.
---
{% include JB/setup %}


Una herramienta para generar presentaciones a partir de archivos de markdown:

Instalación:

npm install -g slides-now-node

( Requiere tener instalado node y npm )

Uso:

Lo primero es crear un archivo de markdown con la presentación



	# Mi primer slide

	- Bullet point 1
	- Bullet point 2
	- Bullet point 3

	# Mi segundo slide

	- Bullet point 1
	- Bullet point 2
	- Bullet point 3


Una vez guardado el archivo (slide.md) para generar
el html basta con 

> slides-now slide.md

Esto abre inmediátamente el navegador con la presentación.

## Tips:

Con la tecla "t" se puede cambiar el tema. Crear un nuevo tema es cuestión de modificar el css.



## Referencia:

[README.md del proyecto](http://glebbahmutov.com/slides-now/?url=README.md)

[Repo Git](https://github.com/bahmutov/slides-now-node)


