
//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
import { Point3D } from './point3D.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');



let cv: CvHLines;
let obj: Obj3D;
let ang: number=0;

let countPestañaDeArriba = 0;
let countPestañaDeArriba2 = 0;

let countPestañaIzquierda = 0;
let countPestañaIzquierda2 = 0;

let countPestañaDerecha = 0;
let countPestañaDerecha2 = 0;

let countPestañaDeAbajoSegundo = 0;
let countPestañaDeAbajoSegundo2 = 0;

let countPestañaDeAbajoPrimero = 0;
let countPestañaDeAbajoPrimero2 = 0;

let maxClickPestañaDeArriba = 6;
let maxClickPestañaDeArriba2 = 6;

let maxClickPestañaDeAbajoPrimeroo = 18;

let maxClickPestañaDeAbajoPrimero2 = 12;


function leerArchivo(e:any) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    obj = new Obj3D();
    if (obj.read(contenido)) {
      //sDir = sDir1;
      cv = new CvHLines(graphics, canvas);
      cv.setObj(obj);
      cv.paint();
    }
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido:any) {
  var elemento = document.getElementById('contenido-archivo');
  //
  //readObject(new Input(contenido));
  elemento.innerHTML = contenido;
}

function vp(dTheta:number, dPhi:number, fRho:number):void{  // Viewpoint
  if (obj != undefined) {
    let obj: Obj3D = cv.getObj();
    if (!obj.vp(cv, dTheta, dPhi, fRho))
      alert('datos no validos');
  }
  else
    alert('aun no has leido un archivo');
}

function eyeDownFunc() {
  vp(0, 0.1, 1);
}

function eyeUpFunc() {
  vp(0, -0.1, 1);
}

function eyeLeftFunc() {
  vp(-0.1, 0, 1);
}

function eyeRightFunc() {
  vp(0.1, 0, 1);
}

function incrDistFunc() {
  vp(0, 0, 2);
}

function decrDistFunc() {
  vp(0, 0, 0.5);
}



//Funciones para mover las pestañas
function PestañaDeArriba() {
  if (countPestañaDeArriba < maxClickPestañaDeArriba) {
  let af = 15;
	Rota3D.initRotate( obj.w[3], obj.w[4], af*Math.PI/180);	
  for (let i = 1; i <= 2; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();
  countPestañaDeArriba++;
}
}

function PestañaDeArriba2() {
  if (countPestañaDeArriba2 < maxClickPestañaDeArriba) {
  let af = -15;
	Rota3D.initRotate( obj.w[3], obj.w[4], af*Math.PI/180);	
  for (let i = 1; i <= 2; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();
  countPestañaDeArriba2++;
}
}

function PestañaIzquierda() {
  if (countPestañaIzquierda < maxClickPestañaDeArriba) {
  let af = -15;
	Rota3D.initRotate( obj.w[3], obj.w[5], af*Math.PI/180);	
  for (let i = 7; i <= 8; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaIzquierda++;
}
}

function PestañaIzquierda2() {
  if (countPestañaIzquierda2 < maxClickPestañaDeArriba) {
  let af = 15;
	Rota3D.initRotate( obj.w[3], obj.w[5], af*Math.PI/180);	
  for (let i = 7; i <= 8; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaIzquierda2++;
}
}

function PestañaDerecha() {
  if (  countPestañaDerecha < maxClickPestañaDeArriba) {
  let af = 15;
	Rota3D.initRotate( obj.w[4], obj.w[6], af*Math.PI/180);	
  for (let i = 9; i <= 10; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaDerecha++;
}
}


function PestañaDerecha2() {
  if (  countPestañaDerecha2 < maxClickPestañaDeArriba) {
  let af = -15;
	Rota3D.initRotate( obj.w[4], obj.w[6], af*Math.PI/180);	
  for (let i = 9; i <= 10; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaDerecha2++;
}
}

function PestañaDeAbajoPrimero() {
  if (  countPestañaDeAbajoPrimero < maxClickPestañaDeAbajoPrimeroo) {
  let af = -15;
	Rota3D.initRotate( obj.w[11], obj.w[12], af*Math.PI/180);	
  for (let i = 13; i <= 14; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaDeAbajoPrimero++;
}
}

function PestañaDeAbajoPrimero2() {
  if (  countPestañaDeAbajoPrimero2 < maxClickPestañaDeAbajoPrimero2) {
  let af = 15;
	Rota3D.initRotate( obj.w[11], obj.w[12], af*Math.PI/180);	
  for (let i = 13; i <= 14; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaDeAbajoPrimero2++;
}
}

function PestañaDeAbajoSegundo() {
  if (  countPestañaDeAbajoSegundo < maxClickPestañaDeArriba) {
  let af = -15;
	Rota3D.initRotate( obj.w[5], obj.w[6], af*Math.PI/180);	
  for (let i = 11; i <= 12; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaDeAbajoSegundo++ ;
}
}

function PestañaDeAbajoSegundo2() {
  if (  countPestañaDeAbajoSegundo2 < maxClickPestañaDeArriba2) {
  let af = 15;
	Rota3D.initRotate( obj.w[5], obj.w[6], af*Math.PI/180);	
  for (let i = 11; i <= 12; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
  countPestañaDeAbajoSegundo2++ ;
}
}



function Pestañasdeabajo() {
 
  PestañaDeAbajoPrimero();
  PestañaDeAbajoSegundo();
  PestañaDeAbajoPrimero();
}

function todasLasPestañasDESARMAR() {
  PestañaDeArriba2();
  PestañaIzquierda2();
  PestañaDerecha2();
  PestañaDeAbajoPrimero2();
  PestañaDeAbajoSegundo2();
 
}

function todasLasPestañas() {
  PestañaDeArriba();
  PestañaIzquierda();
  PestañaDerecha();
  PestañaDeAbajoPrimero();
  PestañaDeAbajoSegundo();
  PestañaDeAbajoPrimero();

}
  // y así sucesivamente para cada función de pestaña
 
  let animation;
  function startAnimation() {
    animation = setInterval(todasLasPestañas, 300);
  }
  function stopAnimation() {
    clearInterval(animation);
  }

  let animationn;
  function startAnimation2() {
    animation = setInterval(todasLasPestañasDESARMAR, 300);
  }
  function stopAnimatio2() {
    clearInterval(animation);
  }

document.getElementById('animacion').addEventListener('click',startAnimation, false);

document.getElementById('todas').addEventListener('click',todasLasPestañas, false);

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);


//movimiento de piezas borrador del index 

document.getElementById('desarmartodo').addEventListener('click', startAnimation2, false);
document.getElementById('PestañasDeAbajo').addEventListener('click', Pestañasdeabajo, false);
document.getElementById('PestañaArriba').addEventListener('click', PestañaDeArriba, false);
document.getElementById('PestañaIzquierda').addEventListener('click', PestañaIzquierda, false);
document.getElementById('PestañaDerecha').addEventListener('click',PestañaDerecha, false);


let Pix: number, Piy: number;
let Pfx: number, Pfy: number;
let theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
let flag: boolean = false;

function handleMouse(evento: any) {
  Pix=evento.offsetX;
  Piy = evento.offsetY;
  flag = true;
}

function makeVizualization(evento: any) {
  if (flag) {
    Pfx = evento.offsetX;
    Pfy = evento.offsetY;
    //console.log(Pfx, Pfy)
    let difX = Pix - Pfx;
    let difY = Pfy - Piy;
    vp(0, 0.1 * difY / 50, 1);
    Piy = Pfy;
    vp(0.1 * difX, 0 / 50, 1);
    Pix = Pfx;
    /*if( Piy>Pfy+1 ){
      phi += SensibilidadY;
      vp(0, 0.1*, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }

    if(Pfy>Piy+1){
      phi -= SensibilidadY;
      vp(0,-0.1, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }*/

    /*if (Pix > Pfx + 1) {
      theta += SensibilidadX;
      vp(0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }
        
    if (Pfx > Pix + 1) {
      theta -= SensibilidadX;
      vp(-0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }*/
  }
}

function noDraw() {
  flag = false;
}

canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);