//Harlem Shake
//@Hugozap

/*
	Funcionalidad:

	Init:
	En la inicialización se crea el div wrapper de alguna palabra aleatoria
	y se deben crear wrappers para todas las palabras del body, para ello
	se recorren los elementos span,div,p,a y se obtienen sus textos, estos
	textos se separan en palabras y por cada palabra se crea un elemento con
	clase "harlem". Se elimina el texto original del elemento antes.

	Ubica un elemento visible que contenga una palabra, dicha
	palabra la encierra en un div con id "firstShake" y la anima
	( la animacion debe empezar cuando se reproduzca el audio) y durar
	x segundos.

	Cuando acabe la animación inicial (firstshake) es momento de la locura, 
	* Aplicar efectos aleatorios que cambien, color, tamano, posicion

*/
var currentId=1;
var firstShakeIndex;
var letterPositions = new Array();

/* Create span elements for all the letters inside a,span,p*/
$("p,a,span,div,label,").each(function(){
	var parent=this;
	traverseChildNodes(node,function(textNode){
		$(parent).
	});

});

/* First part of Harlem Shake */

/*Crescendo*/

/* Utilities */

//http://james.padolsey.com/javascript/replacing-text-in-the-dom-its-not-that-simple/
function traverseChildNodes(node,callbackText) {
 
    var next;
 
    if (node.nodeType === 1) {
 
        // (Element node)
 
        if (node = node.firstChild) {
            do {
                // Recursively call traverseChildNodes
                // on each child node
                next = node.nextSibling;
                traverseChildNodes(node);
            } while(node = next);
        }
 
    } else if (node.nodeType === 3) {
 
        // (Text node)
 			callbackTextText(node);
        	
        }
 
    }
 
}