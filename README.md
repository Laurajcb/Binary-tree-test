# Binary-tree-test

## Descripción:

El propósito de este ejercicio es determinar si un árbol binario dado es un árbol de búsqueda binaria con los siguientes requisitos:

- El valor de los datos de cada nodo a la izquierda de un nodo es menor que el valor de los datos de ese nodo.
- El valor de los datos de cada nodo a la derecha de un nodo es mayor que el valor de los datos de ese nodo.

La función tiene un parámetro, un puntero a la raíz del árbol binario, debe retornar un booleano que indica sí el árbol binario es o no un árbol de búsqueda binaria, es posible el uso de funciones auxiliares.
La funcion no es responsable de leer ningún stdin, esta recibe como parámetro el root del arbol.

## Porque elegí árboles binarios?

Los árboles binarios son una estructura de datos fundamental en programación, estos pueden resolver una amplia gama de problemas, entre estos están los problemas de búsqueda, clasificación, organización y representación de datos.
Además, me parece un tema importante de estudio para resolver problemas futuros, cuando estudie estas estructuras por primera vez fue un poco difícil para mí, así que quise tomar el reto e intentar resolverlo de la mejor manera.

## Solución:

![img](https://github.com/Laurajcb/Binary-tree-test/blob/main/bst.jpeg)

- La forma en la que solucione la búsqueda de árboles binarios fue a través de recursión, ya que es un proceso repetitivo, analizando sí cada nodo respectivamente cumple con la condición, en caso de que alguno no la cumpla, el resultado será falso.
- El algoritmo inicia la búsqueda con los valores iniciales (root, -infinity, infinity)
  dentro de la función helperBS realizamos las siguientes verificaciones: 
  1. Verificamos que el nodo exista, y en caso de que no exista este retorna true. 
  2. Verificamos si el node.value esté dentro del rango del valor más grande encontrado y el valor más pequeño encontrado. 
  3. Verificamos tanto en el node.left como en el node.right, esto significa que todo el left sub-tree deberia < node.value, de la misma forma para el right sub-tree deberia ser > node.value 
  4. Verificamos que ambos cumplan la condición. 
  5. Si todos los llamados de esta función resultan verdaderos, entonces se retornara true al finalizar, de lo contrario será false.

[Laura callejas](https://www.linkedin.com/in/laurajcb/)
