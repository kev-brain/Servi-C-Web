//import { validarSolicitud } from './validacionSolicitud.js';
import { render } from './render.js';

window.addEventListener('hashchange', render);
window.addEventListener('load', render);