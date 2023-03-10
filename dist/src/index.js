//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
var countPestañaDeArriba = 0;
var countPestañaDeArriba2 = 0;
var countPestañaIzquierda = 0;
var countPestañaIzquierda2 = 0;
var countPestañaDerecha = 0;
var countPestañaDerecha2 = 0;
var countPestañaDeAbajoSegundo = 0;
var countPestañaDeAbajoSegundo2 = 0;
var countPestañaDeAbajoPrimero = 0;
var countPestañaDeAbajoPrimero2 = 0;
var maxClickPestañaDeArriba = 6;
var maxClickPestañaDeArriba2 = 6;
var maxClickPestañaDeAbajoPrimeroo = 18;
var maxClickPestañaDeAbajoPrimero2 = 12;
var maxClickPestañaDeAbajoPrimero22 = 13;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
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
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
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
        var af = 15;
        Rota3D.initRotate(obj.w[3], obj.w[4], af * Math.PI / 180);
        for (var i = 1; i <= 2; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDeArriba++;
    }
}
function PestañaDeArriba2() {
    if (countPestañaDeArriba2 < maxClickPestañaDeArriba) {
        var af = -15;
        Rota3D.initRotate(obj.w[3], obj.w[4], af * Math.PI / 180);
        for (var i = 1; i <= 2; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDeArriba2++;
    }
}
function PestañaIzquierda() {
    if (countPestañaIzquierda < maxClickPestañaDeArriba) {
        var af = -15;
        Rota3D.initRotate(obj.w[3], obj.w[5], af * Math.PI / 180);
        for (var i = 7; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaIzquierda++;
    }
}
function PestañaIzquierda2() {
    if (countPestañaIzquierda2 < maxClickPestañaDeArriba) {
        var af = 15;
        Rota3D.initRotate(obj.w[3], obj.w[5], af * Math.PI / 180);
        for (var i = 7; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaIzquierda2++;
    }
}
function PestañaDerecha() {
    if (countPestañaDerecha < maxClickPestañaDeArriba) {
        var af = 15;
        Rota3D.initRotate(obj.w[4], obj.w[6], af * Math.PI / 180);
        for (var i = 9; i <= 10; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDerecha++;
    }
}
function PestañaDerecha2() {
    if (countPestañaDerecha2 < maxClickPestañaDeArriba) {
        var af = -15;
        Rota3D.initRotate(obj.w[4], obj.w[6], af * Math.PI / 180);
        for (var i = 9; i <= 10; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDerecha2++;
    }
}
function PestañaDeAbajoPrimero() {
    if (countPestañaDeAbajoPrimero < maxClickPestañaDeAbajoPrimeroo) {
        var af = -15;
        Rota3D.initRotate(obj.w[11], obj.w[12], af * Math.PI / 180);
        for (var i = 13; i <= 14; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDeAbajoPrimero++;
    }
}
function PestañaDeAbajoPrimero2() {
    if (countPestañaDeAbajoPrimero2 < maxClickPestañaDeAbajoPrimero22) {
        var af = 15;
        Rota3D.initRotate(obj.w[11], obj.w[12], af * Math.PI / 180);
        for (var i = 13; i <= 14; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDeAbajoPrimero2++;
    }
}
function PestañaDeAbajoSegundo() {
    if (countPestañaDeAbajoSegundo < maxClickPestañaDeArriba) {
        var af = -15;
        Rota3D.initRotate(obj.w[5], obj.w[6], af * Math.PI / 180);
        for (var i = 11; i <= 12; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDeAbajoSegundo++;
    }
}
function PestañaDeAbajoSegundo2() {
    if (countPestañaDeAbajoSegundo2 < maxClickPestañaDeArriba2) {
        var af = 15;
        Rota3D.initRotate(obj.w[5], obj.w[6], af * Math.PI / 180);
        for (var i = 11; i <= 12; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        countPestañaDeAbajoSegundo2++;
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
var animation;
function startAnimation() {
    animation = setInterval(todasLasPestañas, 300);
}
function stopAnimation() {
    clearInterval(animation);
}
var animationn;
function startAnimation2() {
    animation = setInterval(todasLasPestañasDESARMAR, 300);
}
function stopAnimatio2() {
    clearInterval(animation);
}
document.getElementById('animacion').addEventListener('click', startAnimation, false);
document.getElementById('todas').addEventListener('click', todasLasPestañas, false);
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
document.getElementById('PestañaDerecha').addEventListener('click', PestañaDerecha, false);
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
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
