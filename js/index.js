// Import des modules
import {Dessin} from './modules/Dessin.js';
import {interfaceColor} from './modules/InterfaceColor.js';
import {interfaceDom} from './modules/InterfaceDom.js';
import {interfaceTools} from './modules/InterfaceTools.js';
import {sendDrawing} from './modules/SendDrawing.js';
import {modal} from './modules/Modal.js';

// On charge le canvas
const canvas = new Dessin("#feuille")

//On charge les palettes
interfaceColor(canvas);


//On charge les outils
interfaceTools(canvas);

//On récupère l'image du canvas et les infos du formulaire
sendDrawing(canvas);

//On crée la modale qui fait apparaitre le formulaire d'envoi
modal();

//On différencie les éléments sélectionnés
interfaceDom();







