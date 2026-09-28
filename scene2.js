for (let i = this.actieNotes.length - 1;   //for(inicio; condicion; cambio)                                      // 
    i>=0;   //mientras i >=0                            //length - 1 porque los indice empieza en 0 su solo es length devuelve 4 
    i--    //i-1                            //lenght -1 deuelve el ultimo indice vlido
   ) {
  let arrow = this.activeNotes[i];

  arrow.y = 
       this.RECEPTOR_Y + 
  ((arrow.targetTime - cuurrentSongTime)* this.SCROLL_SPEED);

  if(arrow.y < this.RECEPTOR_Y - 100){
    this.handleMiss(i);
  }
}
//handleMiss() elimina un elemento del array mientras lo recorre

//suponer que , Que valoers toma i en este bucle foir 
this.activeNotes = [
  A,
  B,
  C,
  D
];
//length =  4
//ultimo indice 3 porque se cuenta desde el 0
for(
  let i = this.activeNotes.length - 1;
  i>= 0;
  i--
)
  //i = 3,2,2,0 => terima el bucle

//this.activeNotes.length btiene la cantidad de elementos del array
//-1 obtiene el ultimo indice valido,porque los indices empiean en 0
//ese valor se gurda en i
///i>= condicion para continuar el bucle 
//i -- hace que i disminuya en 1 cada vuelta del bucle 


  //recorrido de activeNote => [a],[b],[c],[d] arror almacena[i] i = 3; i--; 
//y pase al elemento del array anterior 
//Moviemiento de la nota se ejecuta con este bloque de codigo
  arrow.y =
    this.RECEPTOR_Y + ((arrow.targetTime - currentSongTime) * this.SCROLL_SPEED);
if(arrow.y < this.RECEPTOR_Y - 100){
  this.handleMiss(i)
}/*si la posicion de la nota que viaja por el eje y es menor al receptor - 100 
  se ejecuta handleMiss(i)*/
/*calculo de donde debe estar verticlmente la not en ese instante
en ese bloque de codigo ay cuatro pieza => arrow. = RECEPTOR_Y + ((target Time - currentSongTime))*SCROLL_SPEED
arrow.y es ka cordenada vertical de la nota /targetTime es la propiedad que le agrego al spritedela flecha arrowSprite
arrow targetTime representa el momento de la cancion en el que la nota deberia llegar al receptor
currentSongTime represenra el momento actual reloj de la cancion
targetTime - currentSongTime = resultado => en tiempo(t) para que la nota llegue al momento objetio
utilizando una variable de configuracion this.SCROLL.SPEED = (speed: int);
el valor de scroll_speed dicta un velocidad de int pixeles por segundo como un factor de desplazamiento
targetTime - currentSongTime * VELOCIDAD(PX/S) => determina que tan lejosdebe estar la not del receptor
si arrow.targetTime = 10 y currentSongTime = 7; y Scroll_Speed = 600px/s (t*V = d)
segundos faltan para llegar al momento objetivo es (10-7)*600 = 1800PX(una distancia) faltan para llegar a; receptor
SUMANDO  this.RECEPTOR_Y = 100 ubicacion en patalla eje y el objeto recepto esta en la posicion y = 100
distancia = timpo restante * velocidad => posicion = posicion objetivo(RECP_Y) + distancia 
valor de arrow.y si 
RECEPTOR_Y = 100
SCROLL_SPEED = 600
targetTime = 5
currentSongTime = 4
((5-4)*600=resultado en px + receptor = 700
ES IMPORTANTE LA POSICION DE LA NOTA DEPENDE DIECTAMENTE DEL TIEMPO DE LA CANCION/
*/
//dentro del update
update()
update(time,delta){/*delta representa el tiempo que paso desde la actualizacion anterior del juego*/
 let currentSongTime =  // = > int(scds) cuanto tiempo de la cancion transcurrio desde que emepezo
   (this.time.now - this.songStartTime)/ 1000;/*/1000 convierte de segundo a milisegundo*/
  /*cuanto timepo paso desde que la cancion empezo this.tie.now es un reloj de tiempo que trae incorporador Phaser
  SongStartTime es la var de configuracion = 0*/
}
